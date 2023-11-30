import Login from './Pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './Pages/Signin'

function App() {

  return (
    <BrowserRouter>
    <Routes>
     <Route path={"/log-in"} element={<Login />} />
     <Route path={"/sign-in"} element={<SignIn />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
