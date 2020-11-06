import React from "react";
import {useJsonFetch} from "./useJsonFetch";

export function TestJsonFetch(props){
    const[{data,isLoading,error}] = useJsonFetch(props.url,{})

    return (
        <div>
            {isLoading ? <span>Loading...</span> : <>{data && <span>Data</span>}
            {error && <span>error</span>}</>}
        </div>
    )
}