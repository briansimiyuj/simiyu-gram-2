import { Button } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function Script(){
  
  return(

    <div className="container">

      <Routes>

        <Route path="/" element={<Home/>}/>

      </Routes>

    </div>
   
  )

}

export default Script
