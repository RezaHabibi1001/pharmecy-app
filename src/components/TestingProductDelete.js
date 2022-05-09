import {useMutation} from "@apollo/client";
import {PRODUCT_DELETE} from "../GraphQL/queries"
import React, {useState} from 'react'

export function TestingProductDelete() {
  const [items, setItems] = useState(5)
  
  const [productDelete, { data, loading, error }] = useMutation(PRODUCT_DELETE);

  function handleDelete() {
    productDelete({ variables: { id:"6277ab11a2ee3d76b7c0acd1"}  });
    
    if (loading) return <p>Deleting...</p>;
    if (error) return <p>{error.message}</p>;

    console.log("this is the data recived", data);
  }
      return (<div><input type = "button" value="click to Delete" onClick={handleDelete}/></div>)
  }
