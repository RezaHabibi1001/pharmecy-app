import React from "react";
import "./../styles/general.css"
import { Header } from "./Header";
import { Footer } from "./Footer";


export function Orders() {

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
         <tr>
          <td>Reza Habibi</td>
          <td>345345</td>
          <td>20</td>
          <td>55000 Af</td>
          <td>1400-01-01</td>
          <td><span> accept </span>  &nbsp;  <span> reject</span></td>
        </tr>
        <tr>
          <td>Kazem Habibi</td>
          <td>34u4534</td>
          <td>30</td>
          <td>44000 Af</td>
          <td>1401-02-03</td>
          <td><span> accept </span>  &nbsp;  <span> reject</span></td>
        </tr>
        <tr>
          <td>Reza Habibi</td>
          <td>345345</td>
          <td>20</td>
          <td>55000 Af</td>
          <td>1400-01-01</td>
          <td><span> accept </span>  &nbsp;  <span> reject</span></td>
        </tr>
        <tr>
          <td>Kazem Habibi</td>
          <td>34u4534</td>
          <td>30</td>
          <td>44000 Af</td>
          <td>1401-02-03</td>
          <td><span> accept </span>  &nbsp;  <span> reject</span></td>
        </tr>

         </tbody>
       </table>
      </div>
      <Footer/>
</div>
  )
}