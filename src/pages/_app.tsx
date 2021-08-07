import '../resources/styles/style.scss'
import type { AppProps } from 'next/app'
import {UserProvider} from "@auth0/nextjs-auth0";
import {Provider} from "react-redux";
import {initStore} from "../redux/store";
import CartProvider from "../providers/CartProvider";

const store = initStore()
const MyApp = ({ Component, pageProps }: AppProps) => (
  <UserProvider>
    <Provider store={store}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </Provider>
  </UserProvider>
)
MyApp.title = "cek"

export default MyApp
