import axios from "axios";

export const fetchProdut = ()=>{
    const data =axios.get('https://eccomerce-project-six.vercel.app/api/products')
  
    return data

}

