import { Button } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'

function Script(){
  
  return(

    <div className="container">

      <Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="/auth" element={<Auth/>}/>

      </Routes>

    </div>
   
  )

}

export default Script
