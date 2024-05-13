import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import { Route, Router,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Contact from './components/Contact/Contact.jsx'
import GitHub,{getGitHubInfo} from './components/GitHub/GitHub.jsx'

const routers = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      {/* Don't add '/' for the path again and again, if you want to drill down the elements just add the '/' after the path like : 'about/' */}
      <Route path='' element={<Home />} />
      <Route path='about' element={<About/>} />
      <Route path='user/' element={<User />}>
        <Route path=':userid' element={<User/>}/>
       
      </Route>
      <Route path='contact' element={<Contact />}/>
      <Route 
      loader={getGitHubInfo}//loading the data efficiently
      path='github' 
      element={<GitHub />}/>
      <Route path='*' element={<h1>Page not found</h1>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers}></RouterProvider>
  </React.StrictMode>,
)
