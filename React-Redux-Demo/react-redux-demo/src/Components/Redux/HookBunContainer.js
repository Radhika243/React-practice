import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {byBuns} from './Buns/BunAction';


function HookBunContainer() {
    const noOfBuns1 = useSelector(state=>state.buns.noOfBuns)
    const dispatch=useDispatch();
    return (
        <>
            <h2>Number of Buns - {noOfBuns1} </h2>
            <button onClick={()=>dispatch(byBuns())}>Buy buns</button>
        </>
    )
}

export default HookBunContainer;
