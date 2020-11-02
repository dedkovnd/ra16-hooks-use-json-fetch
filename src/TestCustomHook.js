import React,{useState,useEffect} from "react";

// const url = 'http://localhost:7070/data'
// const err = 'http://localhost:7070/error'
// const loading = 'http://localhost:7070/loading' - тестовые ссылки

function useJsonFetch(url,opt) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(()=> {
       const fetchData = async ()=> {
           setLoading(true)
           try {
               const response = await fetch(url)
               const data = await response.json()
               if (response.ok) {
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

    return[{data,isLoading,error}]
}

export function TestCustomHook(props){
    const[{data,isLoading,error}] = useJsonFetch(props,{})

    return (
        <div>Test
            {isLoading ? <span>Loading...</span> : <span>{data}</span> || <span>{error}</span>}
        </div>
    )
}