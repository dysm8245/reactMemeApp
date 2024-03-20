
const serverCalls = {
    getServer: async() =>{
        const response = fetch("https://yourmemes.onrender.com/api/")
        return response
    },
    signUp: async(data: any) =>{
        const response = await fetch("https://yourmemes.onrender.com/signup",{
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    getTemps: async () =>{
        const response = await fetch("https://yourmemes.onrender.com/api/getTemps",{
            method: "GET",
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    getTemp: async (id: string) =>{
        const response = await fetch(`https://yourmemes.onrender.com/api/getTemp/${id}`,{
            method: "GET",
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    getUserMemes: async (data: string) =>{
        const response = await fetch("https://yourmemes.onrender.com/api/getMemes",{
            method: "GET",
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${data}`
            }
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    getUserMeme: async (data: string, id: string) =>{
        const response = await fetch(`https://yourmemes.onrender.com/api/getMeme/${id}`,{
            method: "GET",
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${data}`
            }
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    addUserMeme: async (data: any) =>{
        const response = await fetch("https://yourmemes.onrender.com/api/addMeme",{
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${data.token}`
            },
            body: JSON.stringify(data)
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    updateMeme: async (data: any) =>{
        const response = await fetch(`https://yourmemes.onrender.com/api/updateMeme/${data.memeid}`,{
            method: "PUT",
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${data.token}`
            },
            body: JSON.stringify(data)
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    deleteMeme: async (token: string, id:string) =>{
        const response = await fetch(`https://yourmemes.onrender.com/api/deleteMeme/${id}`,{
            method: "DELETE",
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    }
    
}

export default serverCalls