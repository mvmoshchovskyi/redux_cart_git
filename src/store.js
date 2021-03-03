import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import rootReducer from './reducer'

import cartItems from './cart-items'


const initialStore = {
    cart: cartItems,
    total:15,
    amount:5

}

const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialStore,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store
