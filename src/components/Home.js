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
      Hello
      </div>
      <Footer/>
</div>
  )
}