import { IsNotEmpty, IsString } from 'class-validator';

export class PermissionCreateDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;
}
