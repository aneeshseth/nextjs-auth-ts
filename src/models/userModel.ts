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
})


const userModel =  mongoose.models.users || mongoose.model("users", userSchema)
export default userModel;