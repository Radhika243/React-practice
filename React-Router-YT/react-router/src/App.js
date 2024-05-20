import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import OrderSummary from './components/OrderSummary';
import Nav from './components/Nav';
import Products from './components/Products';
import FeaturedList from './components/FeaturedList';
import NewList from './components/NewList';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
import Profile from './components/Auth React/Profile';
import {AuthProvider} from './components/Auth React/auth';
import Login from './components/Auth React/Login';
import RequireAuth from './components/Auth React/RequireAuth';
const LazyAbout = React.lazy(()=>import ('./components/About'))

function App() {
  return (
    <AuthProvider>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        {/* React.suspense sets the fallback UI , becuase after doing the lazy loading the about page started giving the error so,we are handling that error by wrapping lazy loading in suspense component */}
        <Route path='about' element={
        <React.Suspense fallback="Loading">
          <LazyAbout />
        </React.Suspense>
        }/>
        <Route path='order-summary' element={<OrderSummary />}/>
        <Route path='products' element={<Products />}>
          {/* Index Route -- to route to featured list*/}
          <Route index element={<FeaturedList />}/>
          <Route path='featured' element={<FeaturedList />}/>
          <Route path='new' element={<NewList />}/>
        </Route>
        <Route path='users' element={<Users />}>
        <Route path=':userid' element={<UserDetails />}/>
        <Route path='admin' element={<Admin />}/>
        </Route>
        <Route path='profile' element={
        <RequireAuth>
          <Profile />
        </RequireAuth>}/>
        <Route path='login' element={<Login />}/>
        <Route path='*' element={<h2>No Routes matched</h2>} />
      </Routes>
      {/* outlet --> corresponds to list of parent routes what needs to be rendered in the child component */}
    </AuthProvider>
  );
}

export default App;
