import React from "react";
import "./../styles/general.css"
import { Header } from "./Header";
import { Footer } from "./Footer";


export function Home() {

  const HomeStyle = {
    header : {
        textAlign:"center",
        color:"green"
    },
    paragraph : {
        textAlign:"center",
        color:"white"

    }
} 
    return(
  <div>
      <Header />
      <div style={HomeStyle}>
        <h1 style={HomeStyle.header}>Welcome to the Management applicaiton...!</h1>

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