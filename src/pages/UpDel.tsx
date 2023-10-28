import serverCalls from "../api/server"
import Meme from "../components/Meme"
import { useStore } from "react-redux"
import useGetUser from "../custom-hooks/GetUser"
import { useNavigate } from "react-router-dom"


const UpDel = () => {
    const store: any = useStore()
    const {user, getUser} = useGetUser()
    const navigate = useNavigate()

    getUser

    const userInfo: any = user
    
    const deleteMeme = async () =>{
        console.log(store.getState().meme.id)
        await serverCalls.deleteMeme(userInfo.uid, store.getState().meme.id)
        navigate("/profile")
    }

    const updateMeme = async () =>{
      navigate("/create")
    }


  return (
    <div className="flex mt-12 grow justify-center">
      <div className="grid grid-cols-1">
        {/* <div className="flex grow justify-center"> */}
          <Meme imgSrc={store.getState().meme.img_src} caption={store.getState().meme.caption} uid={"yes"} size={"w-96"}/>
        {/* </div> */}
        <div className="flex grow justify-center">
            <button onClick={updateMeme} className="bg-green-300 p-3 rounded-full mx-12">Update</button>
            <button onClick={deleteMeme} className="bg-green-300 p-3 rounded-full mx-12">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default UpDel