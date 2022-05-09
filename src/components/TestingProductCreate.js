import {useMutation} from "@apollo/client";
import {PRODUCT_CREATE} from "../GraphQL/queries"
import React, {useState} from 'react'

export function TestingProductCreate() {
  const [items, setItems] = useState(5)
  
  const [productCreate, { data, loading, error }] = useMutation(PRODUCT_CREATE);

  function handleInsert() {
    productCreate({ variables: { data: {name_en:"reza 1001", name_tr:"reza 1002"} } });
    
    if (loading) return <p>Submitting...</p>;
    if (error) return <p>{error.message}</p>;

    console.log("this is the data recived", data);
  }
      return (<div><input type = "button" value="click to insert" onClick={handleInsert}/></div>)
  }
