import React, { createContext, useContext, useReducer } from 'react'
import { productReducer, shoppingCartReducer } from './reducers'
import {
  InitialStateType,
  ProductActions,
  ShopContextData,
  ShoppingCartActions,
} from './types'

const initialState = {
  products: [],
  shoppingCart: 0,
}

const ShopContext = createContext<ShopContextData>({
  state: initialState,
  dispatch: () => null,
})

const mainReducer = (
  { products, shoppingCart }: InitialStateType,
  action: ProductActions | ShoppingCartActions,
) => ({
  products: productReducer(products, action),
  shoppingCart: shoppingCartReducer(shoppingCart, action),
})

const ShopProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)
  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  )
}

export { ShopProvider, ShopContext }

export function useShop(): ShopContextData {
  const context = useContext(ShopContext)
  if (!context) {
    throw new Error('useShop must be used within an ShopProvider')
  }
  return context
}
