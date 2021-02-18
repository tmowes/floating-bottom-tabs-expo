import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { Input } from 'react-native-elements'
import { AuthUser } from '../../../../@types/types'
import { auth } from '../../../../secrets'

import * as S from './styles'

const InstaLogin: React.FC = () => {
  const { navigate } = useNavigation()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = useCallback(() => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(authUser => {
        authUser.user.updateProfile({
          displayName: name,
        })
      })
      .catch(error => console.log(error.message))
    navigate('InstaLanding')
    console.log('Login: ', name, email, password)
  }, [email, name, navigate, password])

  return (
    <S.Container>
      <S.Title>Instagram Clone Register</S.Title>
      <S.InputContainer>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={e => setEmail(e)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          keyboardType="default"
          value={password}
          onChangeText={e => setPassword(e)}
        />
      </S.InputContainer>
      <S.Actions onPress={signIn}>
        <S.Text>Sign In</S.Text>
      </S.Actions>
    </S.Container>
  )
}

export default InstaLogin
