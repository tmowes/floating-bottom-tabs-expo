import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { Input } from 'react-native-elements'
import { auth, db } from '../../../../secrets'

import * as S from './styles'

const InstaRegister: React.FC = () => {
  const { navigate } = useNavigation()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUp = useCallback(() => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        authUser.user.updateProfile({
          displayName: name,
        })
        db.collection('users').doc(authUser.user.uid).set({
          name,
          email,
        })
      })
      .catch(error => console.log(error.message))
    navigate('InstaLanding')
    console.log('REGISTER: ', name, email, password)
  }, [email, name, navigate, password])

  return (
    <S.Container>
      <S.Title>Instagram Clone Register</S.Title>
      <S.InputContainer>
        <Input
          placeholder="Full Name"
          value={name}
          onChangeText={e => setName(e)}
        />
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
      <S.Actions onPress={signUp}>
        <S.Text>Sign Up</S.Text>
      </S.Actions>
    </S.Container>
  )
}

export default InstaRegister
