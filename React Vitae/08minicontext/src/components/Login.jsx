import React,{useContext, useState} from 'react'
import UserContextProvider from '../context/UserContextProvider';
import UserContext from '../context/UserContext';

function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})
    }
    return (
       <div>
        <label>Username:</label>
        <input 
        className='justify-center text-center bg-gray-200 text-green-600'
        type="text" 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='Username'
        />
        {"  "}
        <label>Password:</label>
        <input 
        type="password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Password'
        />

        <button 
        type="submit"
        onClick={handleSubmit}
        >Submit</button>
       </div>
    )
}

export default Login;
