import { useState, useEffect } from 'react'
import serverCalls from "../api/server.ts"
import useGetUser from './GetUser.ts'
import { auth } from '../config/firebase.ts'

const useGetMemes = () =>{
    const[memeData, setMemeData] = useState<[]>([])
    const {user, getUser} = useGetUser()
    getUser
    const userInfo: any = auth.currentUser
    if(user){
        console.log("user")
    }
    console.log(userInfo.uid)
    const handleGetData = async () =>{
        const data = await serverCalls.getUserMemes(userInfo.uid)
        setMemeData(data)
    }

    useEffect(() =>{
        handleGetData()
    },[])

    return {memeData, getMemes:handleGetData}
}

export default useGetMemes