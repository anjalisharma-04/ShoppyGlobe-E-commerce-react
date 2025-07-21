import { useState, useEffect } from "react";
export const useFetch = (url, isList = true) => {
    const [productData, setProductData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        const fetchProducts = async() => {
            try{
                const response = await fetch(url);
                // console.log(response)
                const responseData = await response.json();
                // console.log(responseData)
                // console.log(responseData.data)
                setProductData(responseData.data);
            }
            catch(error){
                setError(error.message)
            }
            finally{
                setLoading(false)
            }
        }
        fetchProducts();
    },[url,isList])

    return {productData, error, loading}
}