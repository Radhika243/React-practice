import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
 const navigate = useNavigate();
  return (
    <div>
      <>
        <h1>Home Component</h1>
        {/* Inorder to navigate to order order confirmed page, useNavigate hook from react-router-dom */}
        {/* <button onClick={()=>navigate('order-summary',{replace:true})}>Place order</button> {replace:true} -- > comes out of the page and it will not navigate to order-summary path*/}

        <button onClick={()=>navigate('order-summary')}>Place order</button>
      </>
    </div>
  )
}

export default Home
