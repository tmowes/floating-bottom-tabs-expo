import { Dispatch } from 'react'
// CONTEXT TYPES

export type InitialStateType = {
  products: ProductType[]
  shoppingCart: number
}

export type ShopContextData = {
  state: InitialStateType
  dispatch: Dispatch<ProductActions | ShoppingCartActions>
}

// REDUCERS TYPES

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}

// eslint-disable-next-line no-shadow
export enum Types {
  Create = 'CREATE_PRODUCT',
  Delete = 'DELETE_PRODUCT',
  Add = 'ADD_PRODUCT',
}

// PRODUCT TYPES

export type ProductType = {
  id: number
  name: string
  price: number
}

export type ProductPayload = {
  [Types.Create]: {
    id: number
    name: string
    price: number
  }
  [Types.Delete]: {
    id: number
  }
}

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>]

// SHOPPINGCART TYPES

export type ShoppingCartPayload = {
  [Types.Add]: undefined
}

export type ShoppingCartActions = ActionMap<ShoppingCartPayload>[keyof ActionMap<ShoppingCartPayload>]
