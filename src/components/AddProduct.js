import React from "react";

import "./../styles/general.css"
import { Header } from "./Header";
import { Footer } from "./Footer";


export function AddProduct() {

  const AddProductStyle = {
    container : {
        width:"500px",
        height:"450px",
        backgroundColor:"#eed",
        margin : "0 auto",
        marginTop:"100px",
        textAlign:"center",
        borderRadius:"15px"
    },
    heading : {
        color:"green",
        paddingTop:"20px",
        fontWeight:"bold"
    },
    inputs : {
        width:"400px",
        height:"40px",
        marginTop:"20px",
        fontSize:"14px",
        borderBottom:"2px solid gray",
        borderTop:"0px solid gray",
        borderLeft:"0px solid gray",
        borderRight:"0px solid gray",
        backgroundColor:"#eed"

    },
    selectButton : {
        width:"400px",
        height:"40px",
        marginTop:"20px",
        fontSize:"14px",
        backgroundColor:"#eed",
        borderBottom:"2px solid gray",
        borderTop:"0px solid gray",
        borderLeft:"0px solid gray",
        borderRight:"0px solid gray",
    },
    submitButton : {
        width:"200px",
        height:"40px",
        marginTop:"20px",
        fontSize:"14px",
        marginTop:"40px"
    }
    
} 

    return(
  <div>
      <Header />
      <div style={AddProductStyle.container}>
        <form action="#">
            <div style={AddProductStyle.heading}>Add a new product with this form</div>
            <input type="text" style={AddProductStyle.inputs}  placeholder="Product Name" id="name"/>
            <input type="text" style={AddProductStyle.inputs}  placeholder="Product Code"/>
            <input type="text" style={AddProductStyle.inputs}  placeholder="Product Price"/>
            <input type="number" style={AddProductStyle.inputs}  placeholder="Product Quantity"/>
            <select style={AddProductStyle.selectButton} >
                <option value="0">Select Category</option>
                <option value="1">Audi</option>
                <option value="2">BMW</option>
                <option value="3">Citroen</option>
                <option value="4">Ford</option>
                <option value="5">Honda</option>
                <option value="6">Jaguar</option>
                <option value="7">Land Rover</option>
                <option value="8">Mercedes</option>
                <option value="9">Mini</option>
                <option value="10">Nissan</option>
                <option value="11">Toyota</option>
                <option value="12">Volvo</option>
            </select>

            <input type="submit" value="Add Product" style={AddProductStyle.submitButton} />
        </form>
      </div>
      <Footer/>
</div>
  )
}