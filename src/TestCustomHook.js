import React,{useState,useEffect} from "react";

function useJsonFetch(url) {
    const [data, setData] = useState()
    const [error, setError] = useState()

    fetch(url)
        .then(response=> response.json())
        .then(json=>setData(json))
        .catch((e)=>setError(e.message))
}

export function TestCustomHook(){
    const url = 'http://localhost:7070/data'
    const err = 'http://localhost:7070/error'
    const loading = 'http://localhost:7070/loading'

    useJsonFetch(url)

    return (
        <>Test</>
    )
}