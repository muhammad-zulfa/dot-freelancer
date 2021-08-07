import Layout from "../components/layouts/Layout";
import CartLists from "../components/cart-lists/CartLists";
import React, {useEffect} from "react";
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import {NextApiRequest, NextPage} from "next";
import {useRouter} from "next/router";

const Cart = () => {
  const { user, error, isLoading } = useUser();
  const router = useRouter()

  useEffect(() => {
    !user && router.push('/api/auth/login')
  },[])

  return (
    <Layout>
      {user ? <CartLists /> : <div>Redirect to Login page...</div>}
    </Layout>
  )
}

export const getServerSideProps = withPageAuthRequired();

export default Cart
