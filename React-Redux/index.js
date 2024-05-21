// console.log("Index.js")
const redux = require('redux');
const reduxLogger = require('redux-logger');
const {configureStore} = require('@reduxjs/toolkit')
const createStore = redux.createStore
const logger = reduxLogger.createLogger()
const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux store",
  };
}

function buyIceCream(){
    return{
        type:BUY_ICE_CREAM,
        info:"Second redux store"
    }
}

// Reducer

const initialCakeCount = {
    numberOfCakes: 10,
}

const initialIceCreamCount = {
    numberOfIceCreams: 20
}

const reducerCake = (state=initialCakeCount,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numberOfCakes:state.numberOfCakes - 1
            }
        default:
            return state;
    }
    
}

const reducerIceCream = (state=initialIceCreamCount,action)=>{
    switch(action.type){
        case BUY_ICE_CREAM:
            return{
                ...state,
                numberOfIceCreams:state.numberOfIceCreams - 1
            }
        default:
            return state
    }
}

const rootReducer = redux.combineReducers({
    cake: reducerCake,
    iceCream: reducerIceCream
})
const store = createStore(rootReducer,redux.applyMiddleware(logger))
console.log('Initial State ', store.getState());
const unsubscribe = store.subscribe(()=>console.log('Updated state:', store.getState()));
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()

// const initialState = {
//     numberOfCakes: 10,
//     numberOfIceCreams: 20
//   };
  
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numberOfCakes: state.numberOfCakes - 1,
//       };
//     case BUY_ICE_CREAM:
//         return{
//             ...state,
//             numberOfIceCreams:state.numberOfIceCreams - 1
//         }
//     default:
//       return state;
//   }
// };
//This will be difficult to keep track when the number of utems increases in shop. so create separate states for those items
// Initial state { numberOfCakes: 10, numberOfIceCreams: 20 }
// Updated state { numberOfCakes: 9, numberOfIceCreams: 20 }
// Updated state { numberOfCakes: 8, numberOfIceCreams: 20 }
// Updated state { numberOfCakes: 7, numberOfIceCreams: 20 }
// Updated state { numberOfCakes: 6, numberOfIceCreams: 20 }
// Updated state { numberOfCakes: 5, numberOfIceCreams: 20 }
// Updated state { numberOfCakes: 5, numberOfIceCreams: 19 }
// Updated state { numberOfCakes: 5, numberOfIceCreams: 18 }
// const store = createStore(reducer);
// console.log('Initial state',store.getState());
// const unsubscribe=store.subscribe(()=> console.log('Updated state',store.getState()));
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyIceCream());
// store.dispatch(buyIceCream())
// unsubscribe()


