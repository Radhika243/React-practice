import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    numOfCakes : 10
}

const cakeSlice = createSlice({
    name:'cake',
    initialState:initialState,
    reducers:{
        //We can directly mutate the state here in tool kit
        orderCake : state =>{
            state.numOfCakes--;
        },
        restockCake : (state,action) =>{
            state.numOfCakes += action.payload;
            //createSlice is having the action creators internally to manage the state updation
        }
    }
})

export default cakeSlice.reducer;
// module.exports.cakeActions = cakeSlice.actions;
export const {orderCake,restockCake} = cakeSlice.actions;