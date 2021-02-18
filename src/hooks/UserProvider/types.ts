import { Dispatch } from 'react'

export type ActionsProps = {
  type: 'SET_USER'
  currentUser: UserProps | null
}

export interface UserProps {
  email: string
  uid: string
}

export interface StateProps {
  currentUser: UserProps | null
}

export interface ContextProps {
  reducer: (state: StateProps, action: ActionsProps) => StateProps
}

export interface StateProviderProps {
  reducer: (state: StateProps, action: ActionsProps) => StateProps
  initialState: StateProps
}

// export interface StateContextData {
//   state: StateProps
//   dispatch: Dispatch<ActionsProps>
// }

// export interface StateContextData {
//   context: [StateProps, Dispatch<ActionsProps>]
// }
export type StateContextData = [StateProps, Dispatch<ActionsProps>]
