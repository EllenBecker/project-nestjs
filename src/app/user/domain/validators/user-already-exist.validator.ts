import { Injectable } from "@nestjs/common";
import { UserService } from "src/app/user/user.service";
import { ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@Injectable()
@ValidatorConstraint()
export class ValidateIsUserAlreadyExist implements ValidatorConstraintInterface {
    constructor(private userService: UserService) {}

    async validate(email: string): Promise<boolean> {
        return !!!await this.userService.findOneByEmail(email);
    }
}
