import React, { useEffect, useState } from "react";
import "./../styles/general.css"
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../zustand";

// this is the Component to recieve the the profucts. 
export function Products() {
  const  isLogin = useProduct(state => state.isLogin)
  const navigate = useNavigate()
  const products = useProduct(state => state.products)
  const handleproducts = useProduct(state => state.handleProduct)
  const handleSelectedRow = useProduct(state=>state.handleSelectedRow)  

   useEffect(()=>{
     if(isLogin == false) {
       navigate("/")
     }
   },[] )


  function updateRow(event) {
    const filteredProducts = products.filter((item) => item.code == event.target.id);
    const filteredObject = filteredProducts[0]
    handleSelectedRow(filteredObject)
    navigate("/Update")
  }
  function deleteRow(event) {
    const filteredProducts = products.filter((item) => item.code !== event.target.id);
    handleproducts([...filteredProducts])
  }

  function searchProduct(event) {
    event.preventDefault()
    let foundProduct = products.map(product => product.name == event.target.value)
    handleproducts([...foundProduct])
  }

  const ProductsStyle = {
    container : {
      width:"750px",
      minHeight:"280px",
      backgroundColor:"#eed",
      margin :"0 auto",
      marginTop:"100px",
      fontSize:"18px",
      color:"#333",
      borderRadius:"10px"
    },
    table : {
      width:"700px",
      textAlign:"center",
      margin:"0 auto",
      borderCollapse:"collapse",

    },
    searchField : {
      width:"500px",
      height:"30px",
      float:"left"
    },
    searchLabel : {
      fontSize:"16px",
      color:"green"
    }, 
    update : {
    cursor:"pointer"
    },
    delete : {
      cursor:"pointer"
      },
      
  } 
    return(
  <div>
      <Header />
      <div style={ProductsStyle.container}>
       <table style={ProductsStyle.table}>
         <thead>
           <tr>
             <th style={ProductsStyle.searchLabel}>Search Products</th>
             <th colSpan="5">
               <input type="search" onChange={searchProduct} placeholder="  Seach products" name="search" style={ProductsStyle.searchField}/>
             </th>
           </tr>
        <tr>
          <th>Product Name</th>
          <th>Code</th>
          <th>Type</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Settings</th>
        </tr>
         </thead>
         <tbody>
         
    {
        products?.map((product, index) => {
            return(
            <tr key={index}>
                <td>{product.name}</td>
                <td>{product.code}</td>
                <td>{product.type}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                
                <td><span id={product.code} onClick={updateRow}  style={ProductsStyle.update} >update</span> &nbsp; <span id={product.code} onClick={deleteRow} style={ProductsStyle.delete}  >delete</span></td>
            </tr>

            )
        })
}
         </tbody>
       </table>
      </div>
      <Footer/>
</div>
  )
}