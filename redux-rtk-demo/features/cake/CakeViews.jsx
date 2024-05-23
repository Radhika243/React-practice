import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {orderCake,restockCake} from './cakeSlice'


const CakeViews = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes : {numOfCakes} </h2>
      <button onClick={()=>dispatch(orderCake())}>Order Cake</button>
      <button onClick={()=>dispatch(restockCake(3))}>Restock cake</button>
    </div>
  )

}

export default CakeViews
