import {CartType} from "../../redux/app/models";
import {useSelector} from "react-redux";
import {rootStore} from "../../redux/models";
import React, {useEffect} from "react";
import styles from './Product.module.scss'

type propTypes = {
  item: CartType,
  onProductClicked: () => void,
  onAddToCart: (item: CartType) => void
  removeFromCart: (id: number) => void
}
export const Product = ({item, onProductClicked, onAddToCart, removeFromCart}: propTypes) => {
  const itemOnCart = useSelector((state: rootStore) => state.app.cartItems.filter((cart) => cart.id === item.id))

  useEffect(() => {

  },[])

  const addCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    itemOnCart.length === 0 ? onAddToCart(item): removeFromCart(item.id)
  }

  return (
    <div
      className={`card shadow-sm pointer-cursor mx-1 mt-2 ${styles.Container}`}
      onClick={onProductClicked}
    >
      <div className="card-header p-0 position-relative">
        <img src={item.img} className={styles.Image}/>
        <div className={`align-self-end position-absolute w-100 text-end ${styles.BgDarken}`} onClick={(event => addCart(event))}>
          {itemOnCart.length === 0 ?
            <i className="bi bi-bag-plus me-2 filled text-white fw-bold"></i> :
            <i className={`bi bi-bag-x-fill me-2 filled text-white fw-bold ${styles.Added}`}></i>
          }
        </div>
      </div>
      <div className="card-body p-2">
        <div className="d-flex flex-column">
          {item.name}
          <div className={styles.PriceTag}>
            Rp {Intl.NumberFormat("en").format(item.price)}
          </div>
        </div>
      </div>
    </div>
  )
}
