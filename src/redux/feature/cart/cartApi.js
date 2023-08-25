import axios from "axios"

export const fetchCartItems= ()=>{
    return axios.get('https://eccomerce-data.onrender.com/cart')
}

export const addItems = (item)=>{
    
    return axios.post('https://eccomerce-data.onrender.com/cart',item)
}

export const deletItems = (id)=>{
    return axios.delete(`https://eccomerce-data.onrender.com/cart/${id}`)
}

export const upDataItems= (id,updatedValue)=>{
    // console.log('updatedVauplelej',updatedValue)
    return axios.patch(`https://eccomerce-data.onrender.com/cart/${id}`,updatedValue)
}