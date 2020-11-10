import React,{useState,useEffect} from "react";

export function useJsonFetch(url,opt) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(()=> {
       const fetchData = async ()=> {
           setLoading(true)
           try {
               const response = await fetch(url,opt = {})
               const data = await response.json()
               if (!response.ok){
                   setError(data.status)
               } else {
                   setData(data)
               }
           } catch(e) {
               setError(e)
           } finally {
               setLoading(false)
           }
       };
       fetchData()
    },[url])
    return[data,isLoading,error]
}

