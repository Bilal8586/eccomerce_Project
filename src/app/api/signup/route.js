import User from "@/models/usersModels";
import { connect } from "@/mongodb/mongodb";
import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
connect()

export async function POST(request){

    try {
        const userBody = await request.json()
        const {username,email,password}=userBody

        // chech user already exits
        const user = await User.findOne({email})
            
        if(user){
            return NextResponse.json({error:'user already exists'},{status:400})
        }

        //hash password
        const hashpassword = await bcryptjs.hash(password,10)

        const NewUser =  new User({
            username,
            email,
            password:hashpassword
        })
        const savedUser = NewUser.save()

        return NextResponse.json({
            message:'User created successfuly',
            success:true,
            savedUser
        })
    } catch (error) {
        return NextResponse.json({erro:error.message},{status:500})
       
    } 
}