import axios from "axios";

export const fetchProdut = ()=>{
    const data =axios.get('https://eccomerce-project-six.vercel.app/api/products')
    // const data = axios.get('http://localhost:3000/api/products')
  
    return data

}

