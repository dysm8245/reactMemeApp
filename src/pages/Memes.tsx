import Meme from "../components/Meme"
import useGetTemps from "../custom-hooks/GetTemps"

interface template{
    id: string,
    img_src: string
}

const Memes = () => {
    const {tempData, getData} = useGetTemps()
    getData

    
  return (
    <>
        <div className="flex mt-12 grow justify-center">
            <div>
                <h1 className="text-4xl font-bold ">Pick a meme template to make a Meme!</h1>
            </div>
        </div>
        <div className="flex grow justify-center">
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1">
                {tempData.map((template: template) =>{
                    return(<Meme imgSrc={template.img_src} caption={""} size={"w-80"}/>)
                }
                )}
            </div>
        </div>
    </>
  )
}
// grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1
export default Memes