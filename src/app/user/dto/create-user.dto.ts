import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { IsUserAlreadyExist } from '../domain/decorators/user-already-exist.decorator';

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    @IsUserAlreadyExist({
        message: 'Já existe um usuário com esse e-mail.'
    })
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
