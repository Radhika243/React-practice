import React from 'react'
import {BUY_CAKE} from './CakeTypes'

const initialCakeState = {
    numberOfCakes:10
}
const CakeReducer = (state=initialCakeState,action) => {
  switch(action.type){
    case BUY_CAKE:
        return{
            ...state,
            // numberOfCakes:state.numberOfCakes-1
            numberOfCakes:state.numberOfCakes-action.payload
        }

    default:
        return state;
  }
}

export default CakeReducer;


