import useGetUser from "../custom-hooks/GetUser"

const Home = () => {
  const {user, getUser} = useGetUser()
  getUser
  const userInfo: any = user
  return (
    <>
        <div className="flex mt-12 grow justify-center">
            <div>
              {user == null?(
                <>
                 <h1 className="text-4xl font-bold ">Welcome to the meme Generating website!</h1>
                </>
              ):(
                <>
                  <h1 className="text-4xl font-bold ">Welcome to the meme Generating website, {userInfo.displayName}!</h1>
                </>
              )}
            </div>
        </div>
    </>
  )
}

export default Home