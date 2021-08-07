import {useSelector} from "react-redux";
import {rootStore} from "../../redux/models";
import {CartType} from "../../redux/app/models";
import CartProduct from "./cart-product/CartProduct";
import React, {useEffect, useState} from "react";
import styles from './CartLists.module.scss'
import ShippingCost from "../shipping-cost/ShippingCost";
type propTypes = {

}

const CartLists = () => {
  const carts = useSelector((state: rootStore) => state.app.cartItems)
  const [subTotal, setSubTotal] = useState(0)
  const [totalWeight, setTotalWeight] = useState(0)

  useEffect(() => {
    let total = 0;
    let totalWeight = 0;

    carts.forEach((val) => {
      total += (val.price * val.added)
      totalWeight += (val.weight * val.added)
    })
    setSubTotal(total)
    setTotalWeight(totalWeight)
  },[carts])

  return (
    <div className="d-flex">
      <div className="card flex-grow-1 mx-1">
        <div className="card-header bg-white">
          <div className="card-title">
            My Cart Lists
          </div>
        </div>
        <div className="card-body">
          {
            carts.map((item: CartType, index: number) => (<CartProduct key={index} item={item}/>))
          }
        </div>
      </div>

      <div className={`card flex-grow-0 mx-1 ${styles.PaymentDetail}`}>
        <div className="card-header bg-white">
          <div className="card-title">
            Payment Details
          </div>
        </div>
        <div className="card-body">
          {
            carts.map((item: CartType, index: number) => (
              <div key={index} className="">
                <div className="d-flex justify-content-between">
                  <div className="mb-2">
                    {item.name}
                  </div>
                  <div className="mb-2">
                    x{item.added}
                  </div>
                  <div className="mb-2">
                    Rp {Intl.NumberFormat('en').format(item.price * item.added)}
                  </div>
                </div>
              </div>
              )
            )
          }
          <div className="d-flex justify-content-between">
            <div>
              Sub Total :
            </div>
            <div>
              Rp {Intl.NumberFormat("en").format(subTotal)}
            </div>
          </div>

          <div className="mt-3">
            <h5>Shipping Cost</h5>
            <ShippingCost totalWeight={totalWeight}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartLists
