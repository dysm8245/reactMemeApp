import { useState } from "react"
import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../config/firebase"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import useGetUser from "../custom-hooks/GetUser"
import serverCalls from "../api/server"
// import serverCalls from "../api/server"

const Navbar = () => {
    const navigate = useNavigate()
    // console.log(auth.currentUser)
    const [open, setOpen] = useState(false)
    const {user, getUser} = useGetUser()

    const handleOpen = () => {
        setOpen(!open)
    }

    const signUp = async () =>{
        // console.log(auth.currentUser)
        if(auth.currentUser == null){
            await signInWithPopup(auth, provider)
            const user: any = auth.currentUser

            const userInfo: Object = {
                "email": user.email,
                "username": user.displayName,
                "token": user.uid
            }
            serverCalls.signUp(userInfo)
            .then(() =>{
                console.log("user signed up")
            })
            .catch(() =>{
                console.log("Already have an account")
            })
            navigate("/")
        }
        navigate("/")
    }
    // console.log(auth.currentUser)
    const logOut = async () =>{
        // console.log(auth.currentUser)
        await signOut(auth)
        // location.reload()
        getUser
        navigate("/")
    }

  return (
    <>
        <nav className="fixed w-full h-12 bg-gradient-to-r from-green-300 from-0% to-orange-300 to-100%">
            <div className="flex h-full justify-start items-center grow">
                <h1 className="mx-16 font-bold">
                    Meme Generator
                </h1>
                <div className="hidden md:flex grow justify-end items-center mr-2">
                    <ul className="inline-flex space-x-5">
                        {user == null?(
                            <>
                                <li className="hover:text-white">
                                    <button onClick={signUp}>Sign-In</button>
                                </li>
                            </>
                        ):(
                            <>
                                <li className="hover:text-white">
                                    <a href="/">Home</a>
                                </li>
                                <li className="hover:text-white">
                                    <a href="/memes">Memes</a>
                                </li>
                                <li className="hover:text-white">
                                    <a href="/profile">Profile</a>
                                </li>
                                <li className="hover:text-white">
                                    <button onClick={logOut}>Sign-Out</button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
                <div className="flex md:hidden grow justify-end items-center mr-2">
                    <button onClick={handleOpen} className="w-5 h-5"><i className="fa-solid fa-bars"></i></button>
                </div>
            </div>
        </nav>
        {open?(
            <div className="flex grow justify-end">
                <div className="grid grid-cols-1 md:hidden fixed mt-12">
                    {user == null?(
                        <>
                            <div className="flex w-32 border border-black bg-green-300 justify-center rounded-lg">
                                <button onClick={signUp}>Sign-In</button>
                            </div>
                        </>
                    ):(
                        <>
                            <div className="flex w-32 border border-black bg-green-300 justify-center rounded-lg">
                                <a href="/">Home</a>
                            </div>
                            <div className="flex w-32 border border-black bg-green-300 justify-center rounded-lg">
                                <a href="/memes">Memes</a>
                            </div>
                            <div className="flex w-32 border border-black bg-green-300 justify-center rounded-lg">
                                <a href="/profile">Profile</a>
                            </div>
                            <div className="flex w-32 border border-black bg-green-300 justify-center rounded-lg">
                                <button onClick={logOut}>Sign-Out</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        ):(
            <></>
        )}
        
    </>
  )
}

export default Navbar