import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

ReactDOM.createRoot(document.getElementById('root')).render(

  <ChakraProvider>
    <RouterProvider router={router}/>
  </ChakraProvider>

)
