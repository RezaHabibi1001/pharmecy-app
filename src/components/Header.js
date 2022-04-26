import { rgbToHex } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

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
    color: "#ccc",
    textAlign: "center",
    padding: "30px 16px",
    textDecoration: "none",
    fontSize:"20px",

    },
    logout :{
      float: "right",
      fontWeight:"bold"
    },
  aLogout  : {
    display:"block",
    color:"#f44",
    textAlign: "center",
    padding: "30px 16px",
    textDecoration: "none",
    fontSize:"20px",
  } 
} 
    return(
  <div style={HeaderStyle.container}>
    <ul style={HeaderStyle.ulStyle}>
    <li style={HeaderStyle.liStyle}><Link style = {HeaderStyle.aStyle} onMouseLeave={normalStyle} onMouseEnter={hoverStyle} class= "active" to="/Home"> Home </Link></li>
        <li style={HeaderStyle.liStyle}><Link style = {HeaderStyle.aStyle} onMouseLeave={normalStyle} onMouseEnter={hoverStyle} class= "active" to="/Orders">Recived Orders</Link></li>
        <li  style={HeaderStyle.liStyle} ><Link style = {HeaderStyle.aStyle}onMouseLeave={normalStyle} onMouseEnter={hoverStyle} to="/Products">All Products</Link></li>
        <li  style={HeaderStyle.liStyle} ><Link style = {HeaderStyle.aStyle}onMouseLeave={normalStyle} onMouseEnter={hoverStyle}  to="/AddProduct">Add New Product</Link></li>
        <li  style={HeaderStyle.logout} ><Link style = {HeaderStyle.aLogout}onMouseLeave={normalStyle} onMouseEnter={hoverStyle}  to="/">Logout</Link></li>
    </ul>

  </div>
  )
}