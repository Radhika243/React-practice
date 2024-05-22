import bunReducer from "./Buns/BunReducer";
import CakeReducer from "./Cake/CakeReducer";
import iceCreamReducer from "./IceCream/IceCreamReducer";
import { combineReducers } from "redux";
import UserReducer from "./User/UserReducer";


const rootReducer = combineReducers({
    cake:CakeReducer,
    iceCream:iceCreamReducer,
    buns:bunReducer,
    users:UserReducer
})

export default rootReducer;