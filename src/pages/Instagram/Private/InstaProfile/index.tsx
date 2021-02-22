import React, { useEffect } from 'react'
import { useShop, useStateValue } from '../../../../hooks'
import { fetchUserPosts } from '../../../../hooks/UserProvider/actions'

import * as S from './styles'

const InstaProfile = () => {
  const {} = useStateValue()
  const {dispatch} = useShop()

  useEffect(() => {
    const loadPosts = async () => {
      dispatch({ type: 'ADD_PRODUCT', posts: await fetchUserPosts() })
    }
    loadPosts()
  }, [dispatch])

  return (
    <S.Container>
      <S.Text>InstaProfile</S.Text>
      <S.Text>{currentUser?.name}</S.Text>
      <S.Text>{posts[0].id}</S.Text>
    </S.Container>
  )
}

export default InstaProfile
