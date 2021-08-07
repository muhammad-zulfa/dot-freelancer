import {useSelector} from "react-redux";
import {rootStore} from "../../redux/models";
import Link from "next/link";
import styles from './Cart.module.scss'

export const Cart = () => {
  const carts = useSelector((appState: rootStore) => appState.app.cartItems)

  return (
    <>
      <div className="me-3 position-relative">
        <Link href="/cart">
          <a
             id="dropDownCartLink"
             role="button"
             className="text-white text-decoration-none"
             data-bs-toggle="dropdown" aria-expanded="false"
          >
            <i className={`bi bi-bag ${styles.CartIcon}`}></i>
          </a>
        </Link>
        <div className={`bg-danger rounded-circle position-absolute top-0 ${styles.Badge}`}>
          {carts.length}
        </div>
      </div>
    </>
)
}
