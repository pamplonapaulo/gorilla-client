import { gql } from 'graphql-request'

const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    products {
      id
      Name
      Price
      Weight
      Description
      InStock
      Image {
        formats
      }
      NutritionFacts {
        Obs
        Carbohydrates
        SaturatedFat
        Portion
        Proteins
        TransFat
        TotalFat
        EnergeticValue
        DietaryFiber
        Sodium
      }
    }
  }
`

export default GET_PRODUCTS
