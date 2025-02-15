import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minLength: [2, "First name must be at least 2 characters long"],
        maxLength: [30, "First name must not be longer than 30 characters"]
    },

    lastName: {
        type: String,
        required: true,
        trim: true,
        minLength: [2, "Last name must be at least 2 characters long"],
        maxLength: [30, "Last name must not be longer than 30 characters"]
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: [6, "Email must be at least 6 characters long"],
        maxLength: [50, "Email must not be longer than 50 characters"]
    },

    password: {
        type: String,
        required: true,
        select: false, // Password should not be returned in queries unless explicitly requested
    }
});

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

// **🔑 Compare passwords**
userSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// **🛡️ Generate JWT Token**
userSchema.methods.generateJWT = function () {
    return jwt.sign(
        { id: this._id, email: this.email, firstName: this.firstName, lastName: this.lastName },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
    );
};

const User = mongoose.model("User", userSchema);

export default User;
