import { useStore } from "react-redux"
import Meme from "../components/Meme"
import MemeForm from "../components/MemeForm"
import { auth } from "../config/firebase"

const Create = () => {
  // type rootState = ReturnType<typeof store.getState>
  const store: any = useStore()
  console.log(auth.currentUser)

  return (
    <div className="flex grow justify-center">
      <div className="grid grid-cols-1 mt-12">
        {/* <div className="flex grow justify-center"> */}
          <Meme imgSrc={store.getState().meme.img_src} caption={""} size={"w-96"}/>
        {/* </div> */}
        <div className="flex grow justify-center">
          <MemeForm id={store.getState().meme.id}/>
        </div>
      </div>
    </div>
  )
}

export default Create