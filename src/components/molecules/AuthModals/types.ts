export enum AuthType {
    'phone' = 'phone',
    'email' = 'email',
}

export enum AuthFormType {
    phone = 'phone',
    phoneConfirm = 'phoneConfirm',
    email = 'email',
}

export interface AuthModalData {
    formType?: AuthFormType;
}
