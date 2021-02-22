import { auth, db } from '../../secrets'
import { SET_USER, GET_USER_POSTS } from './constants'
import { Post } from './types'

export const fetchUser = async () => {
  console.log('SET_USER fetchUser')
  const snapshot = await db.collection('users').doc(auth.currentUser.uid).get()
  const userAuth = snapshot.exists ? snapshot.data() : null
  return userAuth
}

export const fetchUserPosts = async () => {
  console.log('GET_USER_POSTS fetchUserPosts')

  const snapshot = await db
    .collection('posts')
    .doc(auth.currentUser.uid)
    .collection('userPosts')
    .orderBy('createdAt', 'desc')
    .get()
  const userPosts = snapshot.docs.map(doc => {
    const data = doc.data()
    const { id } = doc
    return { id, ...data } as Post
  })

  console.log(JSON.stringify(userPosts))
  return userPosts
}
