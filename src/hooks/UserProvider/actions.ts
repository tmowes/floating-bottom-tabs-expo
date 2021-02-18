import { Dispatch } from 'react'
import { auth, db } from '../../secrets'
import { SET_USER } from './constants'

export const fetchUser = () => {
  return dispatch => {
    db.collection('users')
      .doc(auth.currentUser.uid)
      .get()
      .then(snapshot => {
        if (snapshot.exists) {
          dispatch({ type: SET_USER, currentUser: snapshot.data() })
        } else {
          console.log('SET_USER Error: snapshot does not exist')
        }
      })
  }
}
