import React from 'react'
import Header from './Header'
import Login from './Login'
import { createBrowserRouter } from 'react-router-dom'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'

const Body = () => {

  const Approute = createBrowserRouter([
    
    {
      path: "/browse",
      element: <Browse/>
    },
    {
      path:"/",
      element: <Login/>
    }

  ])
  return (
    <div>
        <RouterProvider router={Approute}/>
        
    </div>
  )
}

export default Body;
