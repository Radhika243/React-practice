const store = require('./app/store');
//named export
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const iceCreamActions = require('./features/icecream/iceCreamSlice').iceCreamActions;
const fetchUsers = require('./features/user/userSlice').fetchUsers;

console.log('Initial state',store.getState());
store.subscribe(()=>{
    console.log('updated state',store.getState());
});

store.dispatch(cakeActions.orderCake());
store.dispatch(cakeActions.orderCake());
store.dispatch(cakeActions.orderCake());
store.dispatch(cakeActions.restockCake(3));

store.dispatch(iceCreamActions.orderIceCream())
store.dispatch(iceCreamActions.orderIceCream())
store.dispatch(iceCreamActions.orderIceCream())
store.dispatch(iceCreamActions.restockIceCream(2))

store.dispatch(fetchUsers())

// unsubscribe();

