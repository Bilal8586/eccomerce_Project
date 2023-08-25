import { getDataFromToken } from "@/helpers/getDatafromToken";
import User from "@/models/usersModels";
import { connect } from "@/mongodb/mongodb";
import { NextResponse } from "next/server";
connect()


export async function GET(request){

    try {
        const userId= await getDataFromToken(request)
        const user = await User.findOne({_id:userId}).select('-password')
        return NextResponse.json({
            message:'User found',
            data:user
        })
    } catch (error) {
        return NextResponse.json({error},{status:400})
        
    }
}