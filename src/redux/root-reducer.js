import {combineReducers} from 'redux';
import furnitureReducer from './furniture/furniture.reducer';


export default combineReducers({
    furniture: furnitureReducer
})