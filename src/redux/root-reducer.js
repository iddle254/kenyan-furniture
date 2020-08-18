import {combineReducers} from 'redux';
import furnitureReducer from './furniture/furniture.reducer';
import shopReducer from './shop/shop.reducer';


export default combineReducers({
    furniture: furnitureReducer,
    shop: shopReducer
})