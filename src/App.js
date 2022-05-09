import React, { Fragment, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './components/Login.js'
import { Home } from './components/Home.js'
import {AddProduct} from "./components/AddProduct"
import { Products } from './components/Products.js'
import { Orders } from './components/Orders.js'
import { UpdateProduct } from './components/Update.js'
import { useProduct } from './zustand/index.js'

import { TestingProducts } from './components/TestingProducts.js'
import { TestingProduct } from './components/TestingProduct.js'
import { TestingProductCreate } from './components/TestingProductCreate.js'
import { TestingProductDelete } from './components/TestingProductDelete.js'
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
         <Route
          path="/Update"
          element={
            <Fragment>
              <UpdateProduct />
            </Fragment>
          }
        />
        <Route
          path="/TestingProducts"
          element={
            <Fragment>
              <TestingProducts />
            </Fragment>
          }
        />
        <Route
          path="/TestingProduct"
          element={
            <Fragment>
              <TestingProduct />
            </Fragment>
          }
        />
        <Route
          path="/TestingProductCreate"
          element={
            <Fragment>
              <TestingProductCreate />
            </Fragment>
          }
        />
         <Route
          path="/TestingProductDelete"
          element={
            <Fragment>
              <TestingProductDelete />
            </Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}