import {furnitureActionTypes} from './furniture.types';
import {addItemToCart} from './furniture.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};
 const cartReducer = (state=INITIAL_STATE, action)=> {
     switch(action.type){
         case furnitureActionTypes.TOGGLE_CART_HIDDEN:
             return {
                 ...state,
                 hidden: !state.hidden
             };
             case furnitureActionTypes.ADD_CART_ITEM:
                 return {
                     ...state,
                     cartItems: addItemToCart(state.cartItems, action.payload)
                 }
             default:
                 return state;
     }
 }

 export default cartReducer;