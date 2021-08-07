import {appActionTypes} from "./types";
import {CartType} from "./models";
import {get as getData, set as saveData} from "../../libs/utils/localDataStorage";

const init = {
  cartItems: [],
}

export const AppReducer = (state = init, action: {type: string, payload?: unknown}) => {
  switch (action.type){
    case appActionTypes.INIT_CART:
      return {cartItems: action.payload}
    case appActionTypes.ADD_TO_CART:
      const addedData = [...state.cartItems, ({...action.payload as CartType, added: 1})]
      saveData('cartItems', addedData)
      return {...state,cartItems: addedData}
    case appActionTypes.REMOVE_FROM_CART:
      const newData = state.cartItems.filter((item: CartType) => item.id != action.payload)
      saveData('cartItems', newData)
      return {
        cartItems: newData
      }
    case appActionTypes.CLEAR_CART:
      saveData('cartItems', [])
      return {
        ...state, cartItems: []
      }
    case appActionTypes.INCREMENT_CART:
      return {
        ...state, cartItems: [...state.cartItems.map((item: CartType) => {
          const itemToCompare = action.payload as CartType
          if(item.id === itemToCompare.id){
            item.added += 1
          }
          return item;
        })]
      }
    case appActionTypes.DECREMENT_CART:
      return {
        ...state, cartItems: [...state.cartItems.map((item: CartType) => {
          const itemToCompare = action.payload as CartType
          if(item.id === itemToCompare.id){
            item.added -= 1
          }
          return item;
        })]
      }
    default:
      return state
  }
}
