export interface IAuthEmailResponse {
    data: {
        token: string;
        refreshToken: string;
    };
}

export interface IAuthEmailCredentialsProps {
    email: string;
    password: string;
}
