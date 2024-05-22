import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BuyCake} from './Cake/CakeActions';

function HookCakeContainer() {
    const numberOfCakes=useSelector(state => state.cake.numberOfCakes)//it behaves similar to mapStateToProps function, and sets the current state
    const dispatchAction = useDispatch()//similar to mapDispatchToProps for dispatching and action
    return (
        <div>
            <h2>NUMBER OF CAKES - {numberOfCakes} </h2>
            <button onClick={()=>dispatchAction(BuyCake())}>BUY CAKE</button>
        </div>
    )

   
}

export default HookCakeContainer;
