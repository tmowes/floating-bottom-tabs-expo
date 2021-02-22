import {
  ProductActions,
  ProductType,
  ShoppingCartActions,
  Types,
} from './types'

export const productReducer = (
  state: ProductType[],
  action: ProductActions | ShoppingCartActions,
) => {
  switch (action.type) {
    case Types.Create:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
        },
      ]
    case Types.Delete:
      return [...state.filter(product => product.id !== action.payload.id)]
    default:
      return state
  }
}

// ShoppingCart

export const shoppingCartReducer = (
  state: number,
  action: ProductActions | ShoppingCartActions,
) => {
  switch (action.type) {
    case Types.Add:
      return state + 1
    default:
      return state
  }
}
