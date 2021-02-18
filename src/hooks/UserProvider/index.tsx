import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useReducer,
} from 'react'
import {
  ActionsProps,
  StateContextData,
  StateProps,
  StateProviderProps,
} from './types'

export const StateContext = createContext<[StateProps, Dispatch<ActionsProps>]>(
  {} as [StateProps, Dispatch<ActionsProps>],
)

export const StateProvider = ({
  reducer,
  initialState,
  children,
}: PropsWithChildren<StateProviderProps>) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateValue = (): StateContextData => {
  const context = useContext(StateContext)
  if (!context) {
    throw new Error('useLoading must be used within an LoadingProvider')
  }
  return context
}
