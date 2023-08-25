import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI)
        const connection = mongoose.connection

        connection.on('connected',()=>{
            console.log('MongoDB connected Successfuly')
        })
        connection.on('error',(e)=>{
            console.log('MongoDB connection error make sure MongoDB is runnin'+e)
            process.exit()
        })
    } catch (error) {
        console.log('something going worng!')
        console.log(error)
        
    }
}

