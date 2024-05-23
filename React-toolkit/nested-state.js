const redux = require('redux');
const produce = require('immer').produce;
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const initialState = {
    name:"Ram",
    address:{
        street:'Ayodhyapura',
        city:'Ayodhya',
        state:'Uttar Pradesh'
    }
}

//need to update the street for the initial state
const STREET_UPDATED = "STREET_UPDATED";
const STATE_UPDATED = "STATE_UPDATED";

function updateStreet(street){
    return{
        type:STREET_UPDATED,
        payload:street
    }
}

function updateState(state){
    return{
        type:STATE_UPDATED,
        payload:state
    }
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case STREET_UPDATED:
            //Nesting the states become complex when we have lot of changes to be updated. so inorder reduce the complexity use "immer" pkg
            // return{
            //     ...state,
            //     address:{
            //         ...state.address,
            //         street: action.payload
            //     }
            // }

            return produce(state,(draft)=>{
                draft.address.street = action.payload
            })
        case STATE_UPDATED:
            return produce(state,(draft)=>{
                draft.address.state = action.payload
            })
        default:
            return state;
    }
}

const store = redux.createStore(reducer,redux.applyMiddleware(logger))
console.log('Initial state',store.getState());
const unsubscribe = store.subscribe(()=>console.log('update state',store.getState()));
store.dispatch(updateStreet('Ayodhya grama'));
store.dispatch(updateState("UP"))
unsubscribe()