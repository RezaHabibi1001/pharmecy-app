import React from "react";
import "./../styles/general.css"

export function Header() {

    function hoverStyle(e){
        e.target.style.backgroundColor = '#333';
    }
    function normalStyle(e){
        e.target.style.backgroundColor = '#555';
    }
    
  const HeaderStyle = {
    container:{
    width:"100%",
    height:"88px",
    backgroundColor:"#eed",
  },
  ulStyle:{
    listStyleType: "none",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    backgroundColor: "#555",
    position: "-webkit-sticky",
    position: "sticky",
    top: 0,
  },
  liStyle :{
    float: "left",
  },

  aStyle :{
    display:"block",
    color: "white",
    textAlign: "center",
    padding: "30px 16px",
    textDecoration: "none",
    fontSize:"20px",

    },
    logout :{
      float: "right",
    },
  aLogout  : {
    display:"block",
    color: "red",
    textAlign: "center",
    padding: "30px 16px",
    textDecoration: "none",
    fontSize:"20px",
  } 
} 
    return(
  <div style={HeaderStyle.container}>
    <ul style={HeaderStyle.ulStyle}>
    <li style={HeaderStyle.liStyle}><a style = {HeaderStyle.aStyle} onMouseLeave={normalStyle} onMouseEnter={hoverStyle} class= "active" href="Orders"> Home </a></li>
        <li style={HeaderStyle.liStyle}><a style = {HeaderStyle.aStyle} onMouseLeave={normalStyle} onMouseEnter={hoverStyle} class= "active" href="Orders">Recived Orders</a></li>
        <li  style={HeaderStyle.liStyle} ><a style = {HeaderStyle.aStyle}onMouseLeave={normalStyle} onMouseEnter={hoverStyle} href="Products">All Products</a></li>
        <li  style={HeaderStyle.liStyle} ><a style = {HeaderStyle.aStyle}onMouseLeave={normalStyle} onMouseEnter={hoverStyle}  href="AddProduct">Add New Product</a></li>
        <li  style={HeaderStyle.logout} ><a style = {HeaderStyle.aLogout}onMouseLeave={normalStyle} onMouseEnter={hoverStyle}  href="Login">Logout</a></li>
    </ul>

  </div>
  )
}