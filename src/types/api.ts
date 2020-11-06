export type ProductNameProps = {
  Name: string
  Price: number
  Description: string
  Url: string
}

export type ProductsCollection = {
  products: Product[]
}

export type Snack = {
  id: string
  Name: string
  Price: number
  Image: Image
}

export type Image = {
  ext: string
  hash: string
}

export type Product = {
  id: string
  Name: string
  Price: number
  Weight: number
  Description: string
  InStock: number
  Active: boolean
  NutritionFacts: NutritionFacts
  Image: Image
}

export type NutritionFacts = {
  Obs: null | string
  Carbohydrates: number
  SaturatedFat: number
  Portion: number
  Proteins: number
  TransFat: number
  TotalFat: number
  EnergeticValue: number
  DietaryFiber: number
  Sodium: number
}

export type Portfolio = {
  portfolio: Item[]
}

export type Item = {
  id: string
  Name: string
}

export type Bag = BagItem[]

export type BagItem = {
  id: string
  name: string
  imgHash: string
  price: number
  quantityToBuy: number
  quantityToSubscribe: number
}

export type Params = {
  params: {
    slug: string
  }
}
