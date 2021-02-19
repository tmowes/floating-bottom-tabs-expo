import { Dispatch } from 'react'
import firebase from 'firebase'

export type DocProps = firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>

export type ActionsProps = {
  type: 'SET_USER'
  currentUser: UserProps | null
}

export interface UserProps {
  name?: string
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

export type StateContextData = [StateProps, Dispatch<ActionsProps>]
