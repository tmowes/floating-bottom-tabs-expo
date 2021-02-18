import { useNavigation } from '@react-navigation/native'
import React from 'react'

import * as S from './styles'

const InstaLanding = () => {
  const { navigate } = useNavigation()
  return (
    <S.Container>
      <S.Title>InstaLanding</S.Title>
      <S.Actions onPress={() => navigate('InstaLogin')}>
        <S.Text>Login</S.Text>
      </S.Actions>
      <S.Actions onPress={() => navigate('InstaRegister')}>
        <S.Text>Register</S.Text>
      </S.Actions>
      <S.Footer />
    </S.Container>
  )
}

export default InstaLanding
