import React, { useState } from "react";
import "./../styles/general.css"
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useProduct } from "../zustand";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCT_CREATE } from "../GraphQL/queries";
import { useApolloClient } from "@apollo/client";
export function AddProduct() {
    const client = useApolloClient()

 // this is for updateing thi global state 
 const handleProduct = useProduct(state => state.handleProduct)

 // this is for reading pervious data of global state 
 const products = useProduct(state => state.products)
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
   


    async function addProduct(event) {
        event.preventDefault();

        let newProduct = {
            name_en:event.target.name_en.value,
            name_tr:event.target.name_tr.value,
        }

        
            const res = await client.mutate({
             mutation:PRODUCT_CREATE,
             variables:{
                data:newProduct
             }
           })
          

        // the new object is  passed to the global state ...
        handleProduct([newProduct,...products])
        document.getElementById("name_en").value = ""
        document.getElementById("name_tr").value = ""
        document.getElementById("price").value = ""
        document.getElementById("quantity").value = ""
    }
    console.log("this is global state",products);

    return(
  <div>
      <Header />
      <div style={AddProductStyle.container}>
        <form action="#" onSubmit={addProduct}>
            <div style={AddProductStyle.heading}>Add a new product with this form</div>
            <input type="text" style={AddProductStyle.inputs}  placeholder="Product Name" id="name_en"/>
            <input type="text" style={AddProductStyle.inputs}  placeholder="Product Code" id="name_tr" />
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