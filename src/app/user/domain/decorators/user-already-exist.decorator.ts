import { ValidationOptions, registerDecorator } from "class-validator";
import { ValidateIsUserAlreadyExist } from "../validators/user-already-exist.validator";

export function IsUserAlreadyExist(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string): void {
        registerDecorator({
          target: object.constructor,
          propertyName: propertyName,
          options: validationOptions,
          constraints: [],
          validator: ValidateIsUserAlreadyExist,
        });
      };

}