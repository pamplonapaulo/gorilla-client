export type ProductNameProps = {
  Name: string
  Price: number
  Description: string
  Url: string
}

export type ProductsCollection = {
  products: Product[]
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
  Image: formats[]
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

export type formats = {
  formats: {
    medium: FormatProps
    small: FormatProps
    thumbnail: FormatProps
  }
}

export type FormatProps = {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: null
  size: number
  width: number
  height: number
}

export type Portfolio = {
  portfolio: Item[]
}

export type Item = {
  id: string
  Name: string
}

export type Paths = {
  paths: {
    params: {
      slug: string
    }
  }
}

export type Params = {
  params: {
    slug: string
  }
}
