import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <>
      <input type='text' placeholder='Search here........'/>
      { " "}
      <br /><br />
      <NavLink to="featured" style={{padding:10, color:"purple", fontWeight:"bold",textDecoration:"none"}}>Featured</NavLink>
      <NavLink to="new" style={{padding:10, color:"purple", fontWeight:"bold",textDecoration:"none"}}>New</NavLink>
      <Outlet />
    </>
  )
}

export default Products
