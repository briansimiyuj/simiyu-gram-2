import React from 'react'
import ReactDOM from 'react-dom/client'
import Script from './Script'
import './style.css'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ChakraProvider>

      <Script/>

    </ChakraProvider>

  </React.StrictMode>,
)
