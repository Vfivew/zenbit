import { Token } from '@prisma/client';

export interface Tokens {
    accessToken: string;
    refreshToken: Token;
}

export interface UserData {
    user: User;
    token: Tokens;
}

export interface User {
    id: string;
    email: string;
    roles: string[];
    provider: string;
    isBlocked: boolean;
}

export interface JwtPayload {
    id: string;
    email: string;
    roles: string[];
}
