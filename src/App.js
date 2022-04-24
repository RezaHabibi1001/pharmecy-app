import React, { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './components/Login.js'
import { Home } from './components/Home.js'
import {AddProduct} from "./components/AddProduct"
import { Products } from './components/Products.js'
import { Orders } from './components/Orders.js'
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <Login />
            </Fragment>
          }
        />
        <Route
          path="/Home"
          element={
            <Fragment>
              <Home />
            </Fragment>
          }
        />
        <Route
          path="/AddProduct"
          element={
            <Fragment>
              <AddProduct />
            </Fragment>
          }
        />
        <Route
          path="/Products"
          element={
            <Fragment>
              <Products />
            </Fragment>
          }
        />
         <Route
          path="/Orders"
          element={
            <Fragment>
              <Orders />
            </Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}