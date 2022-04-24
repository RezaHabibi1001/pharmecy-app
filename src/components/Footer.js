import React,{useState } from "react";
import { borderRadius, color, display, fontFamily, fontSize, fontWeight, height, margin, padding, textAlign, width } from "@mui/system";
import { ArrowLeft } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import "./../styles/general.css"

export function Footer() {

    function hoverStyle(e){
        e.target.style.color = 'gray';
    }
    function normalStyle(e){
        e.target.style.color = 'white';
    }
    
  const HeaderStyle = {
    container:{
        bottom:0,
        width:"100%",
        height:"88px",
        background:"#000000",
        position: "fixed",
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
    imgFooter : {

        display:"block",
        color: "white",
        textAlign: "center",
        padding: "20px 16px",
        textDecoration: "none",
    }
} 
    return(
  <div style={HeaderStyle.container}>
    <ul style={HeaderStyle.ulStyle}>
        <li style={HeaderStyle.liStyle}><a style = {HeaderStyle.aStyle} class= "active" href="#home" onMouseEnter={hoverStyle} onMouseLeave={normalStyle}>Facebook</a></li>
        <li  style={HeaderStyle.liStyle} ><a style = {HeaderStyle.aStyle}href="#news" onMouseEnter={hoverStyle} onMouseLeave={normalStyle}>WhatsApp</a></li>
        <li  style={HeaderStyle.liStyle} ><a style = {HeaderStyle.aStyle}href="#contact" onMouseEnter={hoverStyle} onMouseLeave={normalStyle}>Twitter</a></li>
        <li  style={HeaderStyle.liStyle} ><a style = {HeaderStyle.aStyle}href="#contact" onMouseEnter={hoverStyle} onMouseLeave={normalStyle}>Phone: 0785137891</a></li>
        <li  style={HeaderStyle.liStyle} ><a style = {HeaderStyle.imgFooter}href="#contact"><img src="logo192.png" width="40"/></a></li>
        
    </ul>

  </div>
  )
}