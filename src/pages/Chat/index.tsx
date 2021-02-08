import { useNavigation } from '@react-navigation/native'
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types'
import React, { useCallback, useLayoutEffect } from 'react'
import { Avatar } from 'react-native-elements'

import * as C from '../../components'
import { placeholderImg } from '../../data'
import { auth } from '../../secrets'
import * as S from './styles'

const Chat = () => {
  const { setOptions, reset } = useNavigation()

  const userSignOut = useCallback(() => {
    auth.signOut().then(() =>
      reset({
        index: 0,
        routes: [{ name: 'Login' }],
      }),
    )
    console.log('SIGN OUT')
  }, [reset])

  useLayoutEffect(() => {
    setOptions({
      headerLeft: () => (
        <S.AvatarView>
          <S.LogoutButton onPress={userSignOut}>
            <Avatar
              rounded
              source={{ uri: auth?.currentUser?.photoURL || placeholderImg }}
            />
          </S.LogoutButton>
        </S.AvatarView>
      ),
    } as StackHeaderOptions)
  }, [setOptions, userSignOut])
  return (
    <S.Container>
      <S.Title>init signal clone</S.Title>
      <C.ListItem />
    </S.Container>
  )
}

export default Chat
