import React from 'react'
import { BUY_CAKE } from './CakeTypes';
export const BuyCake =(number=1) => {
    return{
        type: BUY_CAKE,
        payload:number
    }
}


