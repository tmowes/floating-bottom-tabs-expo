import React from 'react'
import { LoadingProvider } from '../loading'
import { StateProvider } from '../UserProvider'
import reducer, { initialState } from '../UserProvider/reducers'

const AppProvider: React.FC = ({ children }) => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <LoadingProvider>{children}</LoadingProvider>
    </StateProvider>
  )
}

export default AppProvider
