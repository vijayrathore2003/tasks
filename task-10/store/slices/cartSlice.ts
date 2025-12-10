import { createSlice } from "@reduxjs/toolkit";
// import { CART_STORAGE_KEY } from "../store";
import { getLocalStorageValue } from '../../util'

export const CART_STORAGE_KEY = 'cart_items'

export type CartType = {
    id: number;
    qty: number;
    price: number
}

const initialCartState = {
    items: getLocalStorageValue(CART_STORAGE_KEY) as CartType[] || []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addItem: (state, action) => {
            let found = false;
            state.items.forEach((item) => {
                if (item.id === action.payload.id) {
                    item.qty = item.qty + 1;
                    found = true;
                }
            })
            if (!found) state.items.push({ id: action.payload.id, qty: 1, price: action.payload.price })
        },

        removeItem: (state, action) => {
            let idxToRemove: number | null = null;

            state.items.forEach((item, i) => {
                if (item.id === action.payload.id) {
                    item.qty--;
                    if (item.qty <= 0) idxToRemove = i;
                }
            });

            if (idxToRemove !== null) {
                state.items.splice(idxToRemove, 1);
            }
        }
    }
})



export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer