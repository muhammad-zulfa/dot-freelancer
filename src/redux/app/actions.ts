import {appActionTypes} from "./types";
import {CartType} from "./models";

export const addToCart = (item: CartType) => ({
  type: appActionTypes.ADD_TO_CART,
  payload: item
})

export const removeFromCart = (id: number) => ({
  type: appActionTypes.REMOVE_FROM_CART,
  payload: id
})

export const clearCart = () => ({
  type: appActionTypes.CLEAR_CART
})

export const initCart = (items: CartType[]) => ({
  type: appActionTypes.INIT_CART,
  payload: items
})

export const incrementCart = (item: CartType) => ({
  type: appActionTypes.INCREMENT_CART,
  payload: item
})

export const decrementCart = (item: CartType) => ({
  type: appActionTypes.DECREMENT_CART,
  payload: item
})
