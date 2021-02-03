import React from 'react'
import { LoadingProvider } from '../loading'

const AppProvider: React.FC = ({ children }) => {
  return (
    <>
      <LoadingProvider>{children}</LoadingProvider>
    </>
  )
}

export default AppProvider
