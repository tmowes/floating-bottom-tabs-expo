import { fetchUser, fetchUserPosts } from './actions'
import { GET_USER_POSTS, SET_USER } from './constants'
import { ActionsProps, StateProps } from './types'

export const initialState: StateProps = {
  currentUser: null,
  posts: [],
}

const reducer = (state: StateProps, action: ActionsProps) => {
  console.log({ action })
  switch (action.type) {
    case SET_USER:
      fetchUser()
      return { ...state, currentUser: action.currentUser }
    case GET_USER_POSTS:
      fetchUserPosts()
      return { ...state, currentUser: action.posts }

    default:
      return state
  }
}

export default reducer
