import {BUY_BUNS} from "./BunTypes"

const initialBunState = {
    noOfBuns:30
}

const bunReducer = (state=initialBunState,action)=>{
    switch(action.type){
        case BUY_BUNS:
            return{
                ...state,
                noOfBuns:state.noOfBuns - 1
            }
        default:
            return state
    }
}

export default bunReducer;