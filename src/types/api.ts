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
  Image: formats[]
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
