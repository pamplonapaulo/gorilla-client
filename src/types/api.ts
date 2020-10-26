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

export type SnackSmall = {
  id: string
  Name: string
  Price: number
  Image: ImageSmall
}

export type ImageSmall = {
  formats: {
    small: FormatProps
  }
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

export type Image = {
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

export type FormatPropsSmall = {
  url: string
}

export type Portfolio = {
  portfolio: Item[]
}

export type Item = {
  id: string
  Name: string
}

export type Params = {
  params: {
    slug: string
  }
}
