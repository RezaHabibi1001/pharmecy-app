import React, { useEffect, useState } from "react";
import "./../styles/general.css"
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../zustand";
import {useQuery} from "@apollo/client";
import {PRODUCTS} from "../GraphQL/queries"
import { useApolloClient } from "@apollo/client";
import { PRODUCT_DELETE } from "../GraphQL/queries";
// this is the Component to recieve the the profucts. 
export function Products() {
  const  isLogin = useProduct(state => state.isLogin)
  const navigate = useNavigate()
  const products = useProduct(state => state.products)
  const handleproduct = useProduct(state => state.handleProduct)
  const handleSelectedRow = useProduct(state=>state.handleSelectedRow)  
  const client = useApolloClient()

  useEffect(()=>{
     if(isLogin == false) {
       navigate("/")
     }
     query()
   },[] )

   const query = async () => {
     const res = await client.query({
      query: PRODUCTS,
      variables:{
        numberOfItems: 5
      }
    })
     handleproduct([...res.data.products.products])
   }



  function updateRow(event) {
    const filteredProducts = products.filter((item) => item.id == event.target.id);
    const filteredObject = filteredProducts[0]
    handleSelectedRow(filteredObject)
    navigate("/Update")
  }

  async function deleteRow ( event) {
      const res = await client.mutate({
       mutation:PRODUCT_DELETE,
       variables:{
         id:event.target.id
       }
    })
    const filteredProducts = products.filter((item) => item.id !== event.target.id);

    handleproduct([...filteredProducts])
    
    console.log("global state after delete",filteredProducts)

  }

  console.log("this is global state",products)
  function searchProduct(event) {
    event.preventDefault()
    let foundProduct = products.map(product => product.name == event.target.value)
    handleproduct([...foundProduct])
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
        products?.map((product) => {
            return(
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name_en}</td>
                <td>{product.name_en}</td>
                <td>{product.name_tr}</td>
                <td>{product.name_tr}</td>
                
                <td><span id={product.id} onClick={updateRow}  style={ProductsStyle.update} >update</span> &nbsp; <span id={product.id} onClick={deleteRow} style={ProductsStyle.delete}  >delete</span></td>
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