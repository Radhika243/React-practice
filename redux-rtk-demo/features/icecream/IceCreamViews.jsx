import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {orderIceCream,restockIceCream} from './iceCreamSlice'

const IceCreamViews = () => {
    const numOfIceCreams = useSelector((state)=> state.numOfIceCreams)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of ice creams : {numOfIceCreams} </h2>
      <button onClick={()=>dispatch(orderIceCream())}>Order ice cream</button>
      <button onClick={()=>dispatch(restockIceCream(3))}>Restock ice cream</button>
    </div>
  )

}

export default IceCreamViews
