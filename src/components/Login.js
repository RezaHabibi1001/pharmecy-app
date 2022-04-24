import React,{useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
 const navigate = useNavigate();
  const [loginValue]  = useState({email:"reza@gmail.com",password:"123"});

  function handleLogin(event) {
    event.preventDefault()

    let email  =  event.target.email.value
    let password = event.target.password.value
    
    if(email === loginValue.email && password === loginValue.password) {
      navigate("/Home")
    }
    else {
      document.getElementById("alert").style.visibility="visible"
    }
  }
 
  const LoginStyle = {
    container:{
    width:"400px",
    height:"400px",
    backgroundColor:"#eed",
    margin: "0 auto",
    marginTop:"100px",
    borderRadius:"10px",
    textAlign:"center"

  },
  alert : {
    color:"#e55",
    marginTop:"20px",
    marginBottom:"20px",
    fontSize:"14px",
    visibility:"hidden"
  },
  inputs :{
    width: "300px",
    height:"30px",
    marginBottom:"20px",
    backgroundColor:"#eed",
    borderBottom:"2px solid gray",
    borderTop:"0px solid gray",
    borderLeft:"0px solid gray",
    borderRight:"0px solid gray",
  },
    forgotLink :{
    float:"left",
    paddingLeft:'50px',
    paddingBottom:'10px',
    fontSize:'13px',
    textDecoration:"none",
    color:"gray",
    fontWeight:"bold"
    },
    loginButton :{
      width: "300px",
      height:"30px",
      marginBottom:"15px",
    },
    } 

    return(
  <div style={LoginStyle.container}>
    <form onSubmit={handleLogin} action="#">
    <img  src="finalLogin.png" width="150px" alt="Login Profile"/> <br />
      <span id = "alert" style={LoginStyle.alert}>Email or Password was wrong</span> <br />
    <input style = {LoginStyle.inputs} type = "email" name="email" placeholder="Enter your email" id = "email"/>
    <input style = {LoginStyle.inputs} type = "password" name="password" placeholder="Enter your password" id = "password" />
    <a href = "/forgot" style={LoginStyle.forgotLink}>Forgot password</a>
    <input type = "submit"  style = {LoginStyle.loginButton}  value = "Login"/>
    </form>
  </div>
  )
}