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
    medium: {
      url: string
    }
    small: {
      url: string
    }
    thumbnail: {
      url: string
    }
  }
}
