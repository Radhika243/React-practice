import React from 'react'
import { NavLink } from 'react-router-dom'
import {useAuth} from './Auth React/auth'


const NavStyles = ({isActive,isPending}) =>{
 // const [user,setUser] = useState('')
 
    return {
        fontWeight: isActive ? 'bold':'normal',
        color: isActive ? 'blue': 'orange',
        textDecoration : isActive ? 'none':'underline',
        padding : 16,
        marginRight: 32
    }
}
const Nav = () => {
  const auth = useAuth();
  return (
    <div>
       <NavLink to="/" style={NavStyles}>Home</NavLink>
       <NavLink to="/about" style={NavStyles}>About</NavLink>
       <NavLink to="/products" style={NavStyles}>Products</NavLink>
       <NavLink to="/profile" style={NavStyles}>Profile</NavLink>
       {
        !auth.user && (
          <NavLink to="/login" style={NavStyles}>Login</NavLink>
        )
       }
    </div>
  )
}

export default Nav
