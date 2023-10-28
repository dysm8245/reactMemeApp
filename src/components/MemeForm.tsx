import { useForm } from 'react-hook-form'
import Input from './Input'
import { useStore } from 'react-redux'
// import { chooseCaption } from "../redux/slices/MemeSlice"
import serverCalls from '../api/server'
import useGetUser from '../custom-hooks/GetUser'
import { useNavigate } from 'react-router-dom'

interface formProps{
    id: string
}

const MemeForm = (props: formProps) => {
    const {register, handleSubmit} = useForm({})
    const {user, getUser} = useGetUser()
    const navigate = useNavigate()
    const store: any = useStore()

    const onSubmit = async (data: any) =>{
        getUser
        if(props.id == null){
            const meme: Object = {
                img_src: store.getState().meme.img_src,
                caption: data.Caption,
                token: user.uid
            }
            await serverCalls.addUserMeme(meme)
            navigate("/profile")
        }
        else{
            console.log(store.getState().meme.id)
            console.log(store.getState().meme.caption)
            const update: Object = {
                img_src: store.getState().meme.img_src,
                memeid: store.getState().meme.id,
                caption: data.Caption,
                token: user.uid
            }
            await serverCalls.updateMeme(update)
            navigate("/profile")
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register("Caption")} name="Caption" placeholder="Caption"></Input>
            <div className="flex grow mt-5 justify-center">
                <button className="bg-green-300 p-3 rounded-full">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default MemeForm