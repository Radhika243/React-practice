import { configureStore } from '@reduxjs/toolkit';
import CakeReducer from '../../React-Redux-Demo/react-redux-demo/src/Components/Redux/Cake/CakeReducer';
import iceCreamReducer from '../../React-Redux-Demo/react-redux-demo/src/Components/Redux/IceCream/IceCreamReducer';
import UserReducer from '../../React-Redux-Demo/react-redux-demo/src/Components/Redux/User/UserReducer';
// const iceCreamReducer = require('../features/icecream/iceCreamSlice');
// const userReducer = require('../features/user/userSlice');
// const reduxLogger = require('redux-logger');
// const logger = reduxLogger.createLogger();

// action cake/orderCake @ 10:28:25.480
//    prev state { cake: { numOfCakes: 9 }, icecream: { numOfIceCreams: 20 } }
//    action     { type: 'cake/orderCake', payload: undefined }
//    next state { cake: { numOfCakes: 8 }, icecream: { numOfIceCreams: 20 } }
// updated state { cake: { numOfCakes: 7 }, icecream: { numOfIceCreams: 20 } }
const store = configureStore({
    reducer:{
        cake: CakeReducer,
        icecream: iceCreamReducer,
        user: UserReducer
    },
    // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger) 
})

module.exports = store;