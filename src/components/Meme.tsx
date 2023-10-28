import { useNavigate } from "react-router-dom"
import { chooseCaption, chooseImg, chooseId } from "../redux/slices/MemeSlice"
import { useDispatch } from 'react-redux'

interface memeProps{
    id?: string,
    imgSrc: string,
    caption?: string,
    size: string,
    uid?: string
}

const Meme = (props: memeProps) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onClick = () =>{
        if(!props.uid){
            dispatch(chooseImg(props.imgSrc))
            navigate("/create")
        }
        else{
            dispatch(chooseId(props.id))
            dispatch(chooseImg(props.imgSrc))
            dispatch(chooseCaption(props.caption))
            navigate("/change")
        }
    }

  return (
    <div className="max-w-fit m-12">
        <div className="max-w-fit">
            <img onClick={onClick} src={"https://yourmemes.onrender.com/" + props.imgSrc} alt="" className={"rounded-lg " + props.size}/>
            <div className={"bg-green-300 rounded-b-lg " + props.size}>
                {props.caption?(
                    <p className="overflow-ellipsis p-3">
                        {props.caption}
                    </p>
                ):(
                    <></>
                )}
            </div>
        </div>
    </div>
  )
}

export default Meme