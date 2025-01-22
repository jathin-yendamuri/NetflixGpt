import React, { useEffect } from 'react'
import Login from './Login'
import { createBrowserRouter, useNavigate } from 'react-router-dom'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom';


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