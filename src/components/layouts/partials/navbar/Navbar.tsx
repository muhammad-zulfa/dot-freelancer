import React from "react";
import {useUser} from "@auth0/nextjs-auth0";
import Link from "next/link";
import styles from "./Navbar.module.scss"
import {Cart} from "../../../cart/Cart";

export const Navbar = () => {
  const {user, error, isLoading} = useUser()

  const RenderNavUser = () => {
    return isLoading || !user ?
      <Link href="/api/auth/login">Login</Link> :
      <Link href="/api/auth/logout">Logout ({user.nickname})</Link>
  }

  const RenderUnauthenticated = () => {
    return (

        <Link href="/api/auth/login">
          <a className="text-white text-decoration-none">
            Login
          </a>
        </Link>
    )
  }

  const RenderAuthenticated = () => {
    return (
      <Link href="/api/auth/logout">
        <a className="text-white text-decoration-none">
          <div className="d-flex align-items-center">
            <img className={`me-1 rounded-circle ${styles.ImgUser}`} src={user?.picture ?? ""} />
            <div className="d-flex flex-column">
              <div>{user?.nickname}</div>
              <span className="opacity-75">Logout</span>
            </div>
          </div>
        </a>
      </Link>
    )
  }
  return (
    <div>
      <div className="navbar bg-primary navbar-expand text-white">
        <div className="container">
          <Link href="/">
            <span className={`navbar-brand text-brand text-white ${styles.Title}`}>Dot Freelancer</span>
          </Link>

          <div className="d-flex align-items-center">
            <Cart />

            <div className="navbar-expand-lg pointer-cursor">
              {isLoading || !user ?
                <RenderUnauthenticated />
                : <RenderAuthenticated />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
