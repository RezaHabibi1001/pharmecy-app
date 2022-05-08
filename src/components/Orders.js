import React from "react";
import "./../styles/general.css"
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useProduct } from "../zustand";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Orders() {

  const isLogin = useProduct(state => state.isLogin)
  const navigate = useNavigate()
  useEffect(() => {
    // Runs once, after mounting
    if(isLogin === false) {
      navigate("/")
    }
  
  }, []);
 
  const orders = useProduct(state => state.orders)
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
    }
  } 
    return(
  <div>
      <Header />
      <div style={ProductsStyle.container}>
       <table style={ProductsStyle.table}>
         <thead>
           <tr>
             <th style={ProductsStyle.searchLabel}>Search Orders</th>
             <th colSpan="5">
               <input type="search" placeholder="  Seach products" name="search" style={ProductsStyle.searchField}/>
             </th>
           </tr>
        <tr>
          <th>Customer Name</th>
          <th>Order Code</th>
          <th>Items</th>
          <th>Price</th>
          <th>Date</th>
          <th>Settings</th>
        </tr>
         </thead>
         <tbody>

           {
             orders.map((order, index) =>{
              return (
                <tr key={index}>
                <td>{order.name}</td>
                <td>{order.code}</td>
                <td>{order.item}</td>
                <td>{order.price}</td>
                <td>{order.date}</td>
                <td><span> accept </span>  &nbsp;  <span> reject</span></td>
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