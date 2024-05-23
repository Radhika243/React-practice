const redux = require('redux');
const {thunk} = require('redux-thunk');
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;
const axios = require('axios')

const initialState = {
    loading:false,
    users:[],
    error:''
}

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

//Action creators
function fetchUsersRequest(){
    return{
        type:FETCH_USERS_REQUEST
    }
}

function fetchUsersSuccess(users){
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

function fetchUsersFailure(error){
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

function fetchUsers(){
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            //returns response.data as an array of users
            const users = response.data.map((user) => user.id);
            dispatch(fetchUsersSuccess(users));
        })
        .catch((error)=>{
            //returns the error msg as error.message
            const errMsg = error.message;
            dispatch(fetchUsersFailure(errMsg))
        })
    }
}

const reducer = (state=initialState,action) =>{
    console.log(action.type);
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
        // default:
        //     return state;
    }
}

const store = createStore(reducer,applyMiddleware(thunk));
console.log('initial render',store.getState());
 store.subscribe(()=>console.log('updated state',store.getState()));
store.dispatch(fetchUsers())
//For async actions there will no unsubscribe and default:return state

