import {CartType} from "../redux/app/models";
import React, {useEffect} from "react";
import {get} from "../libs/utils/localDataStorage";
import {useDispatch} from "react-redux";
import {initCart} from "../redux/app/actions";

const CartContext = React.createContext<CartType[]>([])

type propsType = {
  children: React.ReactNode
}

const CartProvider = ({children}: propsType) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initCart(get('cartItems')))
  },[])

  return (
    <CartContext.Provider value={[]}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
