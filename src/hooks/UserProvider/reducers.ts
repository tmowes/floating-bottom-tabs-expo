import { fetchUser } from './actions'
import { SET_USER } from './constants'
import { ActionsProps, StateProps } from './types'

export const initialState: StateProps = {
  currentUser: null,
}

const reducer = (state: StateProps, action: ActionsProps) => {
  console.log({ action })
  switch (action.type) {
    case SET_USER:
      return { ...state, currentUser: action.currentUser }

    default:
      return state
  }
}

export default reducer
