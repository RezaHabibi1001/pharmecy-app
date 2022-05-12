import React from "react";
import "./../styles/general.css"
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useProduct } from "../zustand";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { border, borderBottom, textAlign } from "@mui/system";
import { ArrowLeft } from "@material-ui/icons";
import { GET_WEATHER } from "../GraphQL/queries";
import { useApolloClient } from "@apollo/client";
export function Home() {
  const navigate = useNavigate()
  const client = useApolloClient()

  let isLogin = useProduct(state=>state.isLogin)
  console.log("userLogined?" , isLogin);
  const [cityWeather, setCityWeather] = useState({})
  
  useEffect(() => {
    // Runs once, after mounting
    if(isLogin === false) {
      navigate("/")
    }
    fetchQuery()
  }, []);

  const fetchQuery = async (event) => {
    const res = await client.query({
     query: GET_WEATHER,
     variables:{
       name:"herat"
     }
   })
   setCityWeather(res.data.getCityByName);
   
  }
   
    const weatherStyles = {
    container : {
      width:"400px",
      height:"400px",
      backgroundColor:"#555",
      margin :"0 auto",
      marginTop:"100px",
      fontSize:"18px",
      borderRadius:"10px",
      textAlign:"center",
      color:"#ddd"
    },

    leftData : {
      float:"left",
      paddingLeft:"20px",
      marginTop:"30px"

    }, 
    rightData : {
      float:"right",
      paddingRight:"20px",
      marginTop:"30px"

    }, 
    city : {
      fontSize:"25px"
    },
    search : {
      width:"300px",
      height:"40px",
      marginTop:"10px",
      backgroundColor:"#555",
      borderRight:"0px",
      borderLeft:"0px",
      borderTop:"0px",
      borderBottom:"2px solid #aaa",
      color:"#ccc"

    }
  }
    return(
      <div>
         <Header />
         <div style={weatherStyles.container}>
            <input type="text" placeholder=" Search weather" style={weatherStyles.search} name = "city_name" id="city_name" onChange={fetchQuery} /><br /><br />
            <img src = "sun.png" width="150px" alt="This is weather situation"/> <br />
            <span style={weatherStyles.city}>{cityWeather.name}</span><br /><br />

            <div style={weatherStyles.leftData}>
               <span>Status</span><br /><br />
                <span>Speed : 36km/h </span><br /><br />
            </div>

            <div style={weatherStyles.rightData}>
                <span>Status: Rainy</span><br /><br />
                <span>Degree : 36 </span><br /><br />
                </div>

           </div>
         <Footer/>
      </div> 
    )
  }