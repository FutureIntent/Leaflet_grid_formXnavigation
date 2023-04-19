import { createSlice } from '@reduxjs/toolkit';

import { cartAdapter } from './adapter';

const initialState = cartAdapter.getInitialState();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, payload) => {
            cartAdapter.addOne(state, payload);
        },
        removeItem: (state, payload) => {
            cartAdapter.removeOne(state, payload);
        },
        updateItem: (state, payload) => {
            cartAdapter.updateOne(state, payload);
        },
    },
});

export default cartSlice.reducer;
