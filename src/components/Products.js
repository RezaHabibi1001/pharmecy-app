import React from "react";
import "./../styles/general.css"
import { Header } from "./Header";
import { Footer } from "./Footer";


export function Products() {

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
             <th style={ProductsStyle.searchLabel}>Search Products</th>
             <th colSpan="5">
               <input type="search" placeholder="  Seach products" name="search" style={ProductsStyle.searchField}/>
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
         <tr>
          <td>Tier</td>
          <td>8475834</td>
          <td>Cycle</td>
          <td>400</td>
          <td>123 Af</td>
          <td><span>update </span>  &nbsp;  <span> delete</span></td>
        </tr>
        <tr>
          <td>Break</td>
          <td>34u8758</td>
          <td>Zaranj</td>
          <td>34</td>
          <td>550 Af</td>
          <td><span>update </span>  &nbsp;  <span> delete</span></td>
        </tr>
        <tr>
          <td>Break</td>
          <td>34u8758</td>
          <td>Zaranj</td>
          <td>34</td>
          <td>550 Af</td>
          <td><span>update </span>  &nbsp;  <span> delete</span></td>
        </tr>
        <tr>
          <td>Break</td>
          <td>34u8758</td>
          <td>Zaranj</td>
          <td>34</td>
          <td>550 Af</td>
          <td><span> update</span>  &nbsp;  <span> delete</span></td>
        </tr>
        <tr>
          <td>Break</td>
          <td>34u8758</td>
          <td>Zaranj</td>
          <td>34</td>
          <td>550 Af</td>
          <td><span> update</span>  &nbsp;  <span> delete</span></td>
        </tr>
         </tbody>
       </table>
      </div>
      <Footer/>
</div>
  )
}