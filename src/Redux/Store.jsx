import { configureStore } from "@reduxjs/toolkit";
import CartReducer from '../Redux/Cartslice';

const store = configureStore({
    reducer: {
        cart: CartReducer
    }
})

export default store;