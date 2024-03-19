import UseGetServer from "../custom-hooks/GetServer"
import useGetUser from "../custom-hooks/GetUser"

const Home = () => {
  const {user, getUser} = useGetUser()
  const {status} = UseGetServer()
  console.log(status)
  getUser
  const userInfo: any = user
  return (
    <>
        <div className="flex grow flex-col">
            <div className="flex grow justify-center mt-12">
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
            <div className="flex grow justify-center items-center">
            {!status?(
              <div className="w-1/4 mt-20">
                <p className="bg-red-500 text-center p-3">Please wait for server to spin up before signing in. This message will disappear once server has started.</p>
              </div>
            ):(
              <></>
            )}
            </div>
        </div>
    </>
  )
}

export default Home