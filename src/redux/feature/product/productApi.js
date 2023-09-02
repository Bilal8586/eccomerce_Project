import axios from "axios";

export const fetchProdut = ()=>{
    const data =axios.get('http://localhost:3000/api/products')
  // const data =axios.get('https://eccomerce-data.onrender.com/products')

    // console.log('data',data)
    
    return data

}

