import {gql} from "@apollo/client";

export const PRODUCTS = gql`
  query GetProducts {
    products(where:{}, numberOfItems:5) {

      products {
        id
      }
    }
  }
`
