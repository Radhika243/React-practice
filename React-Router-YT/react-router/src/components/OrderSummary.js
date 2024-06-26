import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
    const navigate=useNavigate();
  return (
    <div>
      <h2>Order Confirmed</h2>
      {/* -1 to back to previous page */}
      <button onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}

export default OrderSummary
