import { useState, useEffect } from "react";
import serverCalls from "../api/server";

const UseGetServer = () =>{
    const [status, setStatus] = useState(false)

    const handleFetch = () =>{
        serverCalls.getServer()
        .then((data) => {console.log(data); setStatus(true)})
        .catch((err) =>{console.log(err); setStatus(false)})
    }

    useEffect(() =>{
        handleFetch()
    }, [])

    return {status, getStatus:handleFetch}
}

export default UseGetServer