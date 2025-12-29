import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Paste from './components/Paste'
import ViewPastes from './components/ViewPastes'

function App() {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: 
        <div>
          <Navbar />
          <Home />
        </div>
      },
      {
        path: '/paste',
        element: 
        <div>
          <Navbar />
          <Paste />
        </div>
      },
      {
        path: '/pastes/:id',
        element: 
        <div>
          <Navbar />
          <ViewPastes/>
        </div>
      }
    ]
  )  

  return (

    <div>
      <RouterProvider router={router}/>
    </div>
    
  )
}

export default App