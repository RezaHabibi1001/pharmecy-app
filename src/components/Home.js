import React from "react";
import "./../styles/general.css"
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useProduct } from "../zustand";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export function Home() {
  const navigate = useNavigate()
  let isLogin = useProduct(state=>state.isLogin)
  console.log("userLogined?" , isLogin);
  
  useEffect(() => {
    // Runs once, after mounting
    if(isLogin === false) {
      navigate("/")
    }
  
  }, []);
  
  const HomeStyle = {
    header : {
        textAlign:"center",
        color:"green"
    },
    paragraph : {
        textAlign:"center",
        color:"#555"
    }
} 
    return(
  <div>
      <Header />
      <div style={HomeStyle}>
        <h1 style={HomeStyle.header}>Welcome to the .... Management applicaiton...!</h1>

        <p style={HomeStyle.paragraph}>
        This application is for management of financial accounts.This application is for management of financial accounts.
        This application is for management of financial accounts.This application is for management of financial accounts.
        This application is for management of financial accounts.This application is for management of financial accounts.
        This application is for management of financial accounts.This application is for management of financial accounts.
        This application is for management of financial accounts.This application is for management of financial accounts.
        This application is for management of financial accounts.This application is for management of financial accounts.
        This application is for management of financial accounts.This application is for management of financial accounts.
        This application is for management of financial accounts.This application is for management of financial accounts.
        This application is for management of financial accounts.This application is for management of financial accounts.<br />
        This application is for management of financial accounts.This application is for management of financial accounts.
        This application is for management of financial accounts.This application is for management of financial accounts.
        This application is for management of financial accounts.This application is for management of financial accounts.
        This application is for management of financial accounts.This application is for management of financial accounts.
        This application is for management of financial accounts.This application is for management of financial accounts.
        </p>
      </div>
      <Footer/>
</div>
  )
}