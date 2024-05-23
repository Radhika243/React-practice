const createSlice = require('@reduxjs/toolkit').createSlice;

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

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;