import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import ErrorPage from "./pages/error-page";

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ShowCreators />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/add',
      element: <AddCreator />
    },
    {
      path: '/edit/:id',
      element: <EditCreator />
    },
    {
      path: '/view/:id',
      element: <ViewCreator />
    },
  ]

  )

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <RouterProvider router={router}/>
      </div>
      
    </>
  )
}

export default App
