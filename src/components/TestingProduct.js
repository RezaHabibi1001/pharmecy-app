import {useQuery} from "@apollo/client";
import {PRODUCT} from "../GraphQL/queries"
import React, {useState} from 'react'

export function TestingProduct() {
  const [items, setItems] = useState(5)
    const { loading, error, data } = useQuery(PRODUCT, {
      
      variables: { where:{id:"61a607c09d14f83832824c65"}}
         
      });
    
    if (loading) return <p>loading...</p>;
    if (error) return <p>{error.message}</p>;
    console.log("this is the one  product data", data);
    const {id , name_en , name_tr} = data.product
    return( 
      <div>
        <p>
          {id} : {name_en} : {name_tr}
        </p>
      </div>
    )
  }