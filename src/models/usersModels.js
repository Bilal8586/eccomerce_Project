import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
        username:{
            type:String,
            required:[true,'Please provide usernmae!'],
            unique:true
        },
        email:{
            type:String,
            required:[true,'Please provide email!'],
            unique:true
        },
        password:{
            type:String,
            required:[true,'Please provide password']
        },
        isVerified:{
            type:Boolean,
            default:false
        },
        isAdmin:{
            type:Boolean,
            default:false
        },
        forgetPasswordToken:String,
        forgetPasswordTokenExpiry:Date,
        verifyToken:String,
        forgetVerfyTokenExpiry:Date

})

const User = mongoose.models.users || mongoose.model('users',userSchema)
export default User