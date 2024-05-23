const createSlice = require('@reduxjs/toolkit').createSlice;
const cakeActions = require('../cake/cakeSlice').cakeActions;
const initialIceCreamState = {
    numOfIceCreams:20
}

const iceCreamSlice = createSlice({
    name:'Icecream',
    initialState:initialIceCreamState,
    reducers:{
        orderIceCream : (state,action) =>{
            state.numOfIceCreams--;
        },
        restockIceCream : (state,action) =>{
            state.numOfIceCreams += action.payload
        }
    },
    //A callback that receives a builder object to define case reducers via calls to builder, cake actions can be added here to add the reducer from cake
    // extraReducers:{
    //     ['cake/orderCake']: state =>{
    //         state.numOfIceCreams --;
    //     }
    // }
    //recommended way is using builder and adding the cases
    //provides actions to work on the extra action types for each promise cycle methods
    //updated state { cake: { numOfCakes: 9 }, icecream: { numOfIceCreams: 19 } }
    extraReducers:(builder)=>{
        builder.addCase(cakeActions.orderCake,state=>{
            state.numOfIceCreams--;
        })
    }
});

module.exports=iceCreamSlice.reducer;
//named export
module.exports.iceCreamActions = iceCreamSlice.actions;