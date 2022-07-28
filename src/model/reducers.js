import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import purchaseReducer from './purchaseReducer';
import purchaseListReducer from './purchaseListReducer';

const rootReducer = combineReducers({
    productReducer,
    cartReducer,
    purchaseReducer,
    purchaseListReducer
})

export default rootReducer;