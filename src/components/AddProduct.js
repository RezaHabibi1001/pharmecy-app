import React, { useState } from "react";
import "./../styles/general.css"
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useProduct } from "../zustand";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export function AddProduct() {
    const isLogin = useProduct(state => state.isLogin)
    const navigate = useNavigate()
    useEffect(() => {
        // Runs once, after mounting
        if(isLogin === false) {
          navigate("/")
        }
      
      }, []);
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
    // this is for updateing thi global state 
    const handleProduct = useProduct(state => state.handleProduct)

        // this is for reading pervious data of global state 
        const products = useProduct(state => state.products)


    function addProduct(event) {
        event.preventDefault();
            
        let newProduct = {
            name:event.target.name.value,
            code:event.target.code.value,
            price:event.target.price.value,
            quantity:event.target.quantity.value,
            type:event.target.type.value,            
        }

        // the new object is  passed to the global state ...
        handleProduct([newProduct,...products])
        
        document.getElementById("name").value = ""
        document.getElementById("code").value = ""
        document.getElementById("price").value = ""
        document.getElementById("quantity").value = ""
    }
    
    return(
  <div>
      <Header />
      <div style={AddProductStyle.container}>
        <form action="#" onSubmit={addProduct}>
            <div style={AddProductStyle.heading}>Add a new product with this form</div>
            <input type="text" style={AddProductStyle.inputs}  placeholder="Product Name" id="name"/>
            <input type="text" style={AddProductStyle.inputs}  placeholder="Product Code" id="code" />
            <input type="text" style={AddProductStyle.inputs}  placeholder="Product Price" id="price"/>
            <input type="number" style={AddProductStyle.inputs}  placeholder="Product Quantity" id="quantity" />
            <select style={AddProductStyle.selectButton} id="type">
                <option value="aaa" selected="selected">Select Category</option>
                <option value="bbb">Audi</option>
                <option value="bbb">BMW</option>
                <option value="ddd">Citroen</option>
                <option value="eee">Ford</option>
                <option value="fff">Honda</option>
                <option value="ggg">Jaguar</option>
                <option value="hhh">Land Rover</option>
                <option value="iii">Mercedes</option>
                <option value="jjj">Mini</option>
                <option value="kkk">Nissan</option>
                <option value="lll">Toyota</option>
                <option value="mmm">Volvo</option>
            </select>

            <input type="submit" value="Add Product" style={AddProductStyle.submitButton} />
        </form>
      </div>
      <Footer/>
</div>
  )
}