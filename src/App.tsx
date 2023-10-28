import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Memes from "./pages/Memes"
import Create from "./pages/Create"
import Profile from "./pages/Profile"
import UpDel from './pages/UpDel'
import Navbar from "./components/Navbar"
import { Provider } from 'react-redux'
import store from './redux/store'
import useGetUser from './custom-hooks/GetUser'

function App() {
  const {user, getUser} = useGetUser()
  getUser

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Provider store={store}>
          <Routes>
            {user == null?(
              <Route key={1} path={"/"} element={<Home/>}/>
            ):(
              <>
                <Route key={1} path={"/"} element={<Home/>}/>
                <Route key={2} path={"/memes"} element={<Memes/>}/>
                <Route key={3} path={"/profile"} element={<Profile/>}/>
                <Route key={3} path={"/create"} element={<Create/>}/>
                <Route key={3} path={"/change"} element={<UpDel/>}/>
              </>
            )}
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
