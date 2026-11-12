import * as userModel from '../models/userModel.js';
import ValidationError from '../utils/ValidationError.js';
import validator from 'validator'; 
import bcrypt from 'bcryptjs';

const doesUserExist = async (email) => {
const existing = await userModel.findUserByEmail(email);
if (existing.length > 0) {
    return {result: true, user: existing[0]};
}
return {result: false, user: undefined};
};

export const createAccount = async (user) => {
 if (!user.name || !user.email || !user.password) {
        throw new ValidationError('Name, email, and password are required!', 400);
    }
    if (!validator.isEmail(user.email)) {
        throw new ValidationError('improper email format!', 400);
    }
    if (!validator.isStrongPassword(user.password)) {
        throw new ValidationError('Password is not strong enough!', 400);
    }
    const existing = await doesUserExist(user.email);
    if (existing.result) {
        throw new ValidationError('An account with that email already exists!', 400);
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(user.password, salt);

    const result = await userModel.insert(user.name, user.email, hashedPassword);

    if (!result || result <= 0) {
        throw new Error('unable to create account.please try again later!');
    }

    return 'account created successfully!';

}

export const login = async (user) => {
    if (!user.email || !user.password) {
        throw new ValidationError('Email and password are required!', 400);
    }

     const existing = await doesUserExist(user.email);
    if (!existing.result) {
        throw new ValidationError('An account with that email does not exist!', 400);
    }

    const isCorrectPassword = await bcrypt.compare(user.password, existing.user.password);

    if (!isCorrectPassword) {
        throw new Error('Incorrect password!');
    }

    return 'login successful!';

}
