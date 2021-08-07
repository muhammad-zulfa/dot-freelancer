import React from "react";
import {Navbar} from "./partials/navbar/Navbar";
import {Footer} from "./partials/footer/Footer";

type propTypes = {
  children: React.ReactNode
}

const Layout = ({children}: propTypes) => (
  <React.Fragment>
    <main className="main vh-100">
      <Navbar />
      <div className="container mt-3">
        {children}
      </div>
      <Footer />
    </main>
  </React.Fragment>
)

export default Layout
