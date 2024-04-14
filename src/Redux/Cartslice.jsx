
// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: [],
//     reducers: {
//         addToCart(state, action) {
//             state.push(action.payload);
//         },
//         removeFromCart(state, action) {
//             return state.filter((item) => item.id !== action.payload);
//         }
//     }
// })
// export const { addToCart, removeFromCart } = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action) {
            const { id, title, price } = action.payload;
            const existingItem = state.find(item => item.id === id);

            if (existingItem) {
                // If item already exists in cart, increment its quantity
                existingItem.quantity += 1;
            } else {
                // Otherwise, add a new item to the cart with quantity 1
                state.push({
                    id,
                    title,
                    price,
                    image: action.payload.image,
                    quantity: 1
                });
            }
        },
        removeFromCart(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
        decreaseQuantity(state, action) {
            const existingItem = state.find(item => item.id === action.payload);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            }
        }
    }
});

export const { addToCart, removeFromCart, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
