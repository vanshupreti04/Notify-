import userModel from '../models/user.model.js';

export const createUser = async ({ firstName, lastName, email, password }) => {
    if (!firstName || !lastName || !email || !password) {
        throw new Error("First name, last name, email, and password are required");
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userModel.create({
        firstName,   // ✅ Include first name
        lastName,    // ✅ Include last name
        email,
        password: hashedPassword,
    });

    return user;
};

export const getAllUsers = async ({ userId }) => {
    const users = await userModel.find({
        _id: { $ne: userId }
    });
    return users;
}