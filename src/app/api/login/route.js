import User from "@/models/usersModels";
import { connect } from "@/mongodb/mongodb";
import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt  from "jsonwebtoken"
connect()

export async function POST(request){
    try {
        const reqBody = await request.json()
        const {email,password}=reqBody

        // check email is valid
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({error:'use not exists '},{status:400})
        }
        // if check password is correct
        const validPassword = await bcryptjs.compare(password,user.password)
        if(!validPassword){
             NextResponse.json({error:'invalid password'},{status:400})
        }

        // create token data
        const tokenData ={
            id:user._id,
            username:user.username,
            email:user.eamil
        }

        // create token
         const token =  jwt.sign(tokenData,process.env.TOKEN_SECRET,{expiresIn:'1d'})

         const response = NextResponse.json({
             message:'Login successfuly',
             seccess:true
         })
          
         response.cookies.set('token',token,{httpOnly:true})
         return response
    } catch (error) {
       return  NextResponse.json({error},{status:500})
        
    }
}

// export async function POST(request){
//     try {
//         const requBody=await request.json()
//         const {email,password} = requBody

//         // check eamil is exists  
//         const user = await User.findOne({email})
//          if(!user){
//             return NextResponse.json({error:'User not exists'},{status:400})
//          }


//          // check password is correct 
//          const validPassword = await bcryptjs.compare(password,user.password)

//          if (!validPassword){
//             return NextResponse.json({error:'Invalid password'},{status:400})
//          }

//          // create token Data
//          const tokenData = {
//             id:user._id,
//             username:user.username,
//             email:user.email
//          }
//          const token =  jwt.sign(tokenData,process.env.TOKEN_SECRET,{expiresIn:'1d'})

//          const response = NextResponse({
//             message:'Login successfuly',
//             success:true
//          })
//             response.cookies.set('token',token,{httpOnly:true})         
//              return response

        

//     } catch (error) {
//         return NextResponse.json({error:error},{status:500})
        
//     }
// }