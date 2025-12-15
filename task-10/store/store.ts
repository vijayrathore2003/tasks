import cartReducer, { CART_STORAGE_KEY } from './slices/cartSlice'
import {setLocalStorageValue} from '../util'

import { configureStore } from '@reduxjs/toolkit';

const appStore = configureStore({
    reducer: {
        cart: cartReducer
    }
});

appStore.subscribe(()=>{
    const state = appStore.getState()
    setLocalStorageValue(CART_STORAGE_KEY, state.cart.items)
})

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export default appStore;