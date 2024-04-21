import { ConflictException, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Token, User } from '@prisma/client';
import { PrismaService } from '@prisma/prisma.service';
import { UserService } from '@user/user.service';
import { compareSync } from 'bcrypt';
import { add } from 'date-fns';
import { v4 } from 'uuid';
import { LoginDto, RegisterDto } from './dto';
import { Tokens, UserData } from './interfaces';

@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private readonly prismaService: PrismaService,
    ) {}

    async refreshTokens(refreshToken: string, agent: string): Promise<Tokens> {
        const token = await this.prismaService.token.delete({ where: { token: refreshToken } });

        if (!token || new Date(token.exp) < new Date()) {
            throw new UnauthorizedException();
        }

        const user = await this.userService.findOne(token.userId);

        return this.generateTokens(user, agent);
    }

    async register(dto: RegisterDto, agent: string): Promise<UserData> {
        const existingUser = await this.userService.findOne(dto.email);
        if (existingUser) {
            throw new ConflictException('User with this email is already registered');
        }

        const newUser = await this.userService.save(dto);

        const userWithoutPassword = {
            id: newUser.id,
            email: newUser.email,
            roles: newUser.roles,
            provider: newUser.provider,
            isBlocked: newUser.isBlocked,
        };

        const tokens = await this.generateTokens(newUser, agent);

        return { token: tokens, user: userWithoutPassword };
    }

    async login(dto: LoginDto, agent: string): Promise<UserData> {
        const user: User = await this.userService.findOne(dto.email, true).catch((err) => {
            this.logger.error(err);
            return null;
        });

        if (!user || !compareSync(dto.password, user.password)) {
            throw new UnauthorizedException('Invalid credential');
        }

        const userWithoutPassword = {
            id: user.id,
            email: user.email,
            roles: user.roles,
            provider: user.provider,
            isBlocked: user.isBlocked,
        };

        const token = await this.generateTokens(user, agent);
        return { token, user: userWithoutPassword };
    }

    async getUserFromToken(oldToken: string, agent: string): Promise<UserData | null> {
        const payload = this.jwtService.verify(oldToken);

        if (!payload || !payload.id) {
            return null;
        }

        const user = await this.userService.findOne(payload.id);
        const token = await this.generateTokens(user, agent);

        const userWithoutPassword = {
            id: user.id,
            email: user.email,
            roles: user.roles,
            provider: user.provider,
            isBlocked: user.isBlocked,
        };

        return { token, user: userWithoutPassword };
    }

    private async generateTokens(user: User, agent: string): Promise<Tokens> {
        const accessToken = this.jwtService.sign({
            id: user.id,
            email: user.email,
            roles: user.roles,
        });
        const refreshToken = await this.getRefreshToken(user.id, agent);

        return { accessToken, refreshToken };
    }

    private async getRefreshToken(userId: string, agent: string): Promise<Token> {
        const _token = await this.prismaService.token.findFirst({
            where: {
                userId,
                userAgent: agent,
            },
        });
        const token = _token?.token ?? '';

        return this.prismaService.token.upsert({
            where: { token },
            update: {
                token: v4(),
                exp: add(new Date(), { months: 1 }),
            },
            create: {
                token: v4(),
                exp: add(new Date(), { months: 1 }),
                userId,
                userAgent: agent,
            },
        });
    }
}
