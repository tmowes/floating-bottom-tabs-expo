import React, { useEffect } from 'react'
import { useStateValue } from '../../../../hooks'
import { SET_USER } from '../../../../hooks/UserProvider/constants'
import { UserProps } from '../../../../hooks/UserProvider/types'
import { db } from '../../../../secrets'
import * as S from './styles'

const InstaHomeFeed = () => {
  const [{ currentUser }, dispatch] = useStateValue()

  useEffect(() => {
    if (currentUser) {
      db.collection('users')
        .doc(currentUser.uid)
        .get()
        .then(snapshot => {
          if (snapshot.exists) {
            const user = snapshot.data()
            console.log(user)
            dispatch({
              type: SET_USER,
              currentUser: {
                uid: currentUser.uid,
                ...user,
              } as UserProps,
            })
          } else {
            console.log('SET_USER Error: snapshot does not exist')
          }
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  return (
    <S.Container>
      <S.Title>InstaHomeFeed</S.Title>
      <S.Title>{currentUser?.name}</S.Title>
    </S.Container>
  )
}

export default InstaHomeFeed
