import React, { useState } from "react";

import "./../styles/general.css"
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useProduct } from "../zustand";
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCT_UPDATE } from "../GraphQL/queries";
import { useApolloClient } from "@apollo/client";
export function UpdateProduct() {
    const client = useApolloClient()

    const row  = useProduct(state=>state.row)
        const handleSelectedRow = useProduct(state=>state.handleSelectedRow)
        const handleProduct = useProduct(state=>state.handleProduct)
        const products = useProduct(state => state.products)

    const isLogin = useProduct(state => state.isLogin)
    const navigate = useNavigate()
    useEffect(() => {
      // Runs once, after mounting
      if(isLogin === false) {
        navigate("/")
      }
    
    }, []);
   

const UpdateProductStyle = {
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

    async function UpdateProduct(event) {
        event.preventDefault();
            
        let newProduct = {
            name_tr:event.target.name_tr.value,
            name_en:event.target.name_en.value,
        }
        let oldObjectId = {
            id:event.target.id.value,
        }
        console.log("this is data passed to query variables", newProduct)
        console.log("This is the where passed to query variables", oldObjectId)

        const res = await client.mutate({
            mutation:PRODUCT_UPDATE,
            variables:{
                where:oldObjectId,
                data:newProduct
            }
          })
        
        const filteredData = products.filter(item => item.id != event.target.id.value)
        console.log("this is the filteredData", filteredData)
        handleProduct([...filteredData])

        document.getElementById("id").value = ""
        document.getElementById("name_tr").value = ""
        document.getElementById("name_en").value = ""
        document.getElementById("quantity").value = ""
    }
    return(
  <div>
      <Header />
      <div style={UpdateProductStyle.container}>
        <form action="#" onSubmit={UpdateProduct}>
            <div style={UpdateProductStyle.heading}>Update product with this form</div>
            <input type="text" defaultValue={row.id} style={UpdateProductStyle.inputs}  placeholder="Product Name" id="id"/>
            <input type="text" defaultValue={row.name_tr}style={UpdateProductStyle.inputs}  placeholder="Product Code" id="name_tr" />
            <input type="text" defaultValue={row.name_en}style={UpdateProductStyle.inputs}  placeholder="Product Price" id="name_en"/>
            <input type="number" defaultValue={row.quantity} style={UpdateProductStyle.inputs}  placeholder="Product Quantity" id="quantity" />
            <select defaultValue={row.type} style={UpdateProductStyle.selectButton} id="type">
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

            <input type="submit" value="Save changes" style={UpdateProductStyle.submitButton} />
        </form>
      </div>
      <Footer/>
</div>
  )
}