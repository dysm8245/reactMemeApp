import useGetMemes from "../custom-hooks/GetMemes"
import Meme from "../components/Meme"

interface meme{
  id: string,
  img_src: string,
  caption: string,
  user_token: string
}

const Profile = () => {
  const {memeData, getMemes} = useGetMemes()
  getMemes
  return (
    <>
        <div className="flex mt-12 grow justify-center">
            <div>
                <h1 className="text-4xl font-bold ">Here is your Meme Collection! Click on a meme to update or delete it!</h1>
            </div>
        </div>
        <div className="flex grow justify-center">
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1">
                {memeData.map((meme: meme) =>{
                    return(<Meme imgSrc={meme.img_src} caption={meme.caption} id={meme.id} uid={meme.user_token} size={"w-80"}/>)
                }
                )}
            </div>
        </div>
    </>
  )
}

export default Profile