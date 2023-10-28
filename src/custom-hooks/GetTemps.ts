import { useState, useEffect } from 'react'
import serverCalls from "../api/server.ts"

const useGetTemps = () =>{
    const[tempData, setTempData] = useState<[]>([])

    const handleGetData = async () =>{
        const data = await serverCalls.getTemps()
        setTempData(data)
    }

    useEffect(() =>{
        handleGetData()
    },[])

    return {tempData, getData:handleGetData}
}

export default useGetTemps