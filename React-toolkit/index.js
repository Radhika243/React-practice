// console.log('from index.js');
//const {configureStore, applyMiddleware}=require('@reduxjs/toolkit').configureStore
const logger = require('redux-logger')
const {createStore,bindActionCreators} = require('redux');
const ORDERED_CAKE = "ORDERED_CAKE";
const RESTOCK_CAKE= "RESTOCK_CAKE"

function orderCake(){
    return{
        type:ORDERED_CAKE,
        name:"Chocolate Cake",
    }
}

function restockCake(qty=1){
    return{
        type: RESTOCK_CAKE,
        quantity:qty
    }
}

const initialState = {
    numberOfCakes:10,
    anotherInfo:10
}

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case ORDERED_CAKE:
            return{
                ...state,//inorder to access all the state properties (anotherInfo along with numberOfCakes )
                numberOfCakes:state.numberOfCakes - 1
            }
        case RESTOCK_CAKE:
            return{
                ...state,
                numberOfCakes:state.numberOfCakes + action.quantity
            }
        default:
            return state;
    }
}

const store = createStore(reducer);
console.log('initial state',store.getState());
const unsubscribe = store.subscribe(()=>console.log('updated state',store.getState()));
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(2))

const actions = bindActionCreators({orderCake,restockCake},store.dispatch)
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3)
unsubscribe();