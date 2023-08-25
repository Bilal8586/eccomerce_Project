import jwt from 'jsonwebtoken'

export const getDataFromToken= (request)=>{

    try {
        const token = request.cookies.get('token')?.value || ''
        const decodToken = jwt.verify(token,process.env.TOKEN_SECRET)
        return decodToken.id
    } catch (error) {
       throw new Error(error.message)
    }
}