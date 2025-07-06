import React from 'react'
import MainPage from './MainPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MealCards from './MealCards'
import MealInfo from './MealInfo'
import Layout from './Layout'

const App = () => {
let routing=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<MainPage/>,
    },
        {
            path:"/mealcards",
            element:<MealCards/>,
        },
        {
            path:"/:mealid",
            element:<MealInfo/>,
        },
      
    ]
  }
])

  return (
    <>
    <RouterProvider router={routing} />
    </>
  )
}

export default App