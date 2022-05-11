import {gql} from "@apollo/client";


// This query is for retriving all  ----------------------------------------------------------(1)
export const PRODUCTS = gql`
  query Products($where:ProductsWhereInput, $numberOfItems:Int!){
    products(where:$where, numberOfItems:$numberOfItems) {
      products {
        id
        name_en
        name_tr
      }
    }
  }
  `

//This query is for retriving One Product ------------------------------------------------------(2)
export const PRODUCT = gql`
  query Product($where:OneproductInput) {
    product(where:$where) {
      id 
      name_en
      name_tr
    }
  }
`

// This mutation is for Insertin product into database ----------------------------------------------(3)
export const PRODUCT_CREATE = gql`
  mutation ProductCreate($data:ProductInput!) {
    productCreate(data:$data){
      id
      name_en
      name_tr
    }
  }
`

// This mutation is for Deleting product from database ----------------------------------------------(4)
export const PRODUCT_DELETE = gql`
  mutation ProductDelete($id:ID) {
    productDelete(id:$id)
  }
`

// This mutation  id for Updating Product in the database
export const PRODUCT_UPDATE = gql`
  mutation ProductUpdate($where: ProductUpdateWhereInput!, $data: ProductInput) {
    productUpdate(where:$where,data:$data){
        id
        name_en
        name_tr
    }
  }
`
