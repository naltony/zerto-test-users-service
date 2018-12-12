import { UserInterface } from "../interfaces/user.interface";
import { UsersUtils } from './users.utils';
import { expect } from 'chai';
import 'mocha';

describe('User Utils', () => {

    it('should fail validation due to empty strings', () => {

        const user: UserInterface = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            email: '',
            isActive: false
        };

        const result = UsersUtils.validateUser(user);
        expect(result.isValid).to.equal(true);
        expect(result.message).to.length(0);
        expect(result.responseCode).to.equal(200);
    });

});