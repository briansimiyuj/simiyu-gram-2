import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth'
import PageLayout from './PageLayout/PageLayout'

function Script(){
  
  return(

    <PageLayout>

      <Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="/auth" element={<Auth/>}/>

      </Routes>

    </PageLayout>
   
  )

}

export default Script
