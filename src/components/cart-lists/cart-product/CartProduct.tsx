import {CartType} from "../../../redux/app/models";
import {useDispatch} from "react-redux";
import styles from './CartProduct.module.scss'
import {decrementCart, incrementCart} from "../../../redux/app/actions";

type propTypes = {
  item: CartType
}

const CartProduct = ({item}: propTypes) => {
  const dispatch = useDispatch()

  return (
    <div className="my-1 d-flex justify-content-between border-bottom border-1">
      <div className="mx-1">
        <img src={item.img} className={styles.Image}/>
      </div>
      <div className="d-flex flex-column align-items-start mx-1">
        <div className="my-1">
          {item.name}
        </div>
        <div className="fw-bold my-1">
          {item.price}
        </div>
      </div>
      <div className={styles.Counter}>
        <div className="input-group">
          <button
            className="btn btn-sm btn-outline-danger"
            type="button"
            onClick={() => dispatch(decrementCart(item))}>
            -
          </button>
          <input type="text" value={item.added} disabled className="form-control"/>
          <button
            className="btn btn-sm btn-outline-secondary"
            type="button"
            onClick={() => dispatch(incrementCart(item))}>
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartProduct;
