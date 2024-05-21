const redux = require('redux');
const axios = require('axios');
const thunk = require('redux-thunk')
// import redux from 'redux';
// import axios from 'axios';
// import thunk from 'redux-thunk';

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initialState = {
    loading:false,
    users:[],
    error:''
}

const FETCH_USERS_REQUEST="FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS="FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE="FETCH_USERS_FAILURE";

const fetchUsersRequest = () =>{
    return{
        type:FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users =>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

const fetchUsersFailure = error =>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading:false,
                users:action.payload,
                error:''
            }
        case FETCH_USERS_FAILURE:
            return{
                loading:false,
                users:[],
                error:action.payload
            }
        default: return state
    }
}

//async function for handling the api fetching
const fetchUsers = () =>{
    return function(dispatch){
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            //response.data is array for users data
            const users = response.data.map((user)=>user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch((error)=>{
            //error.message is the error description
            dispatch(fetchUsersFailure(error.message))
        })
    }
}
const store = createStore(reducer, applyMiddleware(thunk));
//const store = createStore(reducer,applyMiddleware(thunkMiddleware))
console.log('initial render',store.getState());
store.subscribe(()=>console.log('update render',store.getState()))
//dispatching the action
store.dispatch(fetchUsers())
/**
 * C:\Users\radhika.katti\Documents\React git practice\React-practice\React-Redux\node_modules\redux\dist\cjs\redux.cjs:407
    const chain = middlewares.map((middleware) => middleware(middlewareAPI));
                                                  ^

TypeError: middleware is not a function
    at C:\Users\radhika.katti\Documents\React git practice\React-practice\React-Redux\node_modules\redux\dist\cjs\redux.cjs:407:51
 */