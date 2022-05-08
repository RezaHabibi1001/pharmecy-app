import {useQuery} from "@apollo/client";
import {PRODUCTS} from "../GraphQL/queries"

export function ExchangeRates() {

    const { loading, error, data } = useQuery(PRODUCTS);
    
    if (loading) return <p>loading...</p>;
    if (error) return <p>{error.message}</p>;
    console.log("this is the data recived", data);
    return data.products.products.map(({id}) => (
      <div key={id}>
        <p>
          {id}
        </p>
      </div>
    ));
  }