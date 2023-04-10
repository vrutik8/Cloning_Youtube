import React from 'react'
import "./App.css"
import Header from './components/Header'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'

const appRouter = createBrowserRouter([{
  path:"/",
  element: <Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>,
    },
    {
      path:"watch",
      element:<WatchPage />,
    }
  ]
}])

const App = () => {
  return (
    <Provider store={store}>    <div>
      {/* <h1 Name='text-4xl bg-red-300'>Hello</h1> */}
      <Header/>
      <RouterProvider router={appRouter}/>
      <Body/>
    </div>
    </Provider>

  )
}

export default App
