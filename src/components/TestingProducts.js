import {useQuery} from "@apollo/client";
import {PRODUCTS} from "../GraphQL/queries"
import React, {useState} from 'react'

export function TestingProducts() {
  const [items, setItems] = useState(5)
    const { loading, error, data } = useQuery(PRODUCTS, {
      
      variables: { where:{}, numberOfItems: 9 }
         
      });
    
    if (loading) return <p>loading...</p>;
    if (error) return <p>{error.message}</p>;
    console.log("this is the data recived", data);
    return data.products.products.map(({id, name_en, name_tr}) => (
      <div key={id}>
        <p>
          {id} : {name_en} : {name_tr}
        </p>
      </div>
    ));
  }