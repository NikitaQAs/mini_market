import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from './GoodsSlice';
import cartReducer from './CartSlice';

export default configureStore({
    reducer: {
        goods: goodsReducer,
        cart: cartReducer
    },
});