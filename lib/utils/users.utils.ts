import { UserInterface } from "../interfaces/user.interface";
import { ValidationResponse } from "./validation-response";

export class UsersUtils {

    static validateUser(user: UserInterface): ValidationResponse {

        let response: ValidationResponse;

        if (user.firstName.length == 0) {
            response = new ValidationResponse(false, 1000, 'First name is mandatory');
        }

        return response;
    }
}