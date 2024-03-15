import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unquie: true
    },
    email: {
        type: String,
        require: true,
        unquie: true
    },
    password: {
        type: String,
        require: true,
    }
}, {timestamps: true});

const User = mongoose.Model('User', userSchema)

export default User;