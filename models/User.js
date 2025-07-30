import mongoose, { Schema } from "mongoose";

const User = mongoose.models.User || mongoose.model('User', new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, default: 'user' },
    password: { type: String, required: true }
}, { timestamps: true }));

export default User;