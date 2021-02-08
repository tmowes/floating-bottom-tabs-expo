import React, { useCallback, useEffect, useState } from 'react'
import { Platform } from 'react-native'

import { Button, Input } from 'react-native-elements'
import { auth } from '../../secrets'

import * as S from './styles'

const Login = ({ navigation }) => {
  const { navigate, replace } = navigation
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        replace('Chat')
      }
    })

    return unsubscribe
  }, [replace])

  const signIn = useCallback(() => {
    auth.signInWithEmailAndPassword(email, password).catch(err => alert(err))
    console.log('SIGN IN')
  }, [email, password])

  const signUp = useCallback(() => {
    navigate('Register')
  }, [navigate])

  return (
    <S.Container>
      <S.Img
        source={{
          uri:
            'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png',
        }}
      />
      <S.Text>Login to sinal</S.Text>
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
      <S.Btn
        title="Login"
        onPress={signIn}
        containerStyle={{ width: 200, marginBottom: 8 }}
      />
      <S.Btn
        title="Register"
        type="outline"
        onPress={signUp}
        containerStyle={{ width: 200 }}
      />
      {Platform.OS === 'ios' && <S.PadBot />}
    </S.Container>
  )
}

export default Login
