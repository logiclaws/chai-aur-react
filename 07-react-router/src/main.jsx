import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
// import Home from './components/Home/Home'
// import About from './components/About/About'
// import Contact from './components/Contact/Contact'
import {Home, Contact, About, User, Github} from './components/index'
import { githubInfoLoader } from './components/Github/Github'

/// Way 1: Creating Route

// const router = createBrowserRouter([
//   {
//     path: '/', 
//     element: <Layout />,
//     children: [
//       { path:'', element:<Home /> },
//       { path:'about', element:<About /> },
//       { path:'contact', element:<Contact /> }
//     ]
//   }
// ])

/// Way 2: Creating Route

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
