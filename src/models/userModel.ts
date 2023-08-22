import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    isVerified: {
        type: Boolean, 
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})


const userModel =  mongoose.models.users || mongoose.model("users", userSchema)
export default userModel;