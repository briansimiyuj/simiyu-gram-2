import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import Auth from './pages/Auth'
import PageLayout from './PageLayout/PageLayout'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom'
import { auth } from './firebase/config'

function Script(){

  const [authUser] = useAuthState(auth)
  
  return(

    <PageLayout>

      <Routes>

        <Route path="/" element={ authUser ? <Home/> : <Navigate to="/auth"/> }/>

        <Route path="/auth" element={ !authUser ? <Auth/> : <Navigate to="/"/> }/>

        <Route path="/:username" element={ <ProfilePage/> }/>

      </Routes>

    </PageLayout>
   
  )

}

export default Script
