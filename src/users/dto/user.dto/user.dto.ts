export class CreateUserDto {
    readonly username: string;
    readonly email: string;
}

export class UpdateUserDto {
    readonly username?: string;
    readonly email?: string;
}
