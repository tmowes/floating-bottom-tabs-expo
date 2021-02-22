import React from 'react'
import { LoadingProvider } from '../loading'
import { ShopProvider } from '../ShopProvider'
import { StateProvider } from '../UserProvider'
import reducer, { initialState } from '../UserProvider/reducers'

const AppProvider: React.FC = ({ children }) => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <ShopProvider>
        <LoadingProvider>{children}</LoadingProvider>
      </ShopProvider>
    </StateProvider>
  )
}

export default AppProvider
