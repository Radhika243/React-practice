import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {byIceCream} from './IceCream/IceCreamActions';


function HookIceCreamContainer() {
    const numberOfIceCream = useSelector(state => state.iceCream.numberOfIceCream)
    const dispatch = useDispatch()

    return (
        <>
            <h2>Number of ice creams -{numberOfIceCream} </h2>
            <button onClick={()=>dispatch(byIceCream())}>Buy ice cream</button>
        </>
    )
}

export default HookIceCreamContainer;
