import React, { createContext, useContext, useState } from 'react'
import { LoadingContextData } from './types'

export const LoadingContext = createContext<LoadingContextData>(
  {} as LoadingContextData,
)

export const LoadingProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false)
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading(): LoadingContextData {
  const context = useContext(LoadingContext)
  if (!context) {
    throw new Error('useLoading must be used within an LoadingProvider')
  }
  return context
}
