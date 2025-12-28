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



// createBrowserRouter ✅
// New data router API (React Router v6.4+).
// Used to define routes as a JavaScript object/array.
// RouterProvider ✅
// Provides the router configuration to the entire app.
// Similar to how Provider works in Redux.



// :id → dynamic URL parameter
// Examples:
// /pastes/1
// /pastes/abc123
// Inside ViewPastes, you can access id using:
// import { useParams } from 'react-router-dom'
// const { id } = useParams()