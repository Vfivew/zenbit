import { Public, UserAgent } from '@common/decorators';
import {
    BadRequestException,
    Body,
    ClassSerializerInterceptor,
    Controller,
    Get,
    HttpStatus,
    Post,
    Res,
    UnauthorizedException,
    UseInterceptors,
    Headers,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';

const ARRAY_INDEX = 1;

@Public()
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UseInterceptors(ClassSerializerInterceptor)
    @Post('register')
    async register(@Body() dto: RegisterDto, @Res() res: Response, @UserAgent() agent: string) {
        const user = await this.authService.register(dto, agent);

        if (!user) {
            throw new BadRequestException(`Can't register user with data ${JSON.stringify(dto)}`);
        }

        const response = { token: user.token.accessToken, user: user.user };

        res.status(HttpStatus.OK).json(response);
    }

    @Post('login')
    async login(@Body() dto: LoginDto, @Res() res: Response, @UserAgent() agent: string) {
        const userData = await this.authService.login(dto, agent);

        if (!userData) {
            throw new BadRequestException(`Can't login with details ${JSON.stringify(dto)}`);
        }

        const response = { token: userData.token.accessToken, user: userData.user };

        res.status(HttpStatus.OK).json(response);
    }

    @Get('authenticated-user')
    async getUserFromToken(
        @Headers('Authorization') authorizationHeader: string,
        @Res() res: Response,
        @UserAgent() agent: string,
    ) {
        const token = authorizationHeader.split(' ')[ARRAY_INDEX];
        const user = await this.authService.getUserFromToken(token, agent);

        if (!user) {
            throw new UnauthorizedException('Something wrong!');
        }

        const response = { token: user.token.accessToken, user: user.user };

        res.status(HttpStatus.OK).json(response);
    }
}
