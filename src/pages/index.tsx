import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/layouts/Layout";
import {Product} from "../components/product/Product";
import productData from "../data/products.json"
import {CartType} from "../redux/app/models";
import {useDispatch} from "react-redux";
import {addToCart, removeFromCart} from "../redux/app/actions";

export default function Home() {
  const dispatch = useDispatch()
  return (
    <Layout>
      <Head>
        <title>Dot Freelancer</title>
      </Head>

      <div className="d-flex flex-wrap flex-sm-wrap justify-content-center">
        {
          productData.map((product, index) => (
            <Product
              key={index}
              item={product as CartType}
              onProductClicked={() => {}}
              onAddToCart={(item) => dispatch(addToCart(item))}
              removeFromCart={(id) => dispatch(removeFromCart(id))}
            />
          ))
        }
      </div>
    </Layout>

  )
}
