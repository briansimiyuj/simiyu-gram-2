import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import PageLayout from './pageLayout/PageLayout'

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
