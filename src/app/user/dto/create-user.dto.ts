import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;

    @IsOptional()
    phone: string;
    
    @IsNotEmpty()
    @MinLength(8, {
        message: 'Senha do usuario deve conter no mínimo 8 caracteres.'
    })
    @IsString()
    password: string;
}
