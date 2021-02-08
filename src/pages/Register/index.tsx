import { useNavigation } from '@react-navigation/native'
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import { Platform } from 'react-native'
import { Input } from 'react-native-elements'
import { placeholderImg } from '../../data'
import { auth } from '../../secrets'

import * as S from './styles'

const Register = () => {
  const { setOptions } = useNavigation()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const register = useCallback(() => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL: imageUrl || placeholderImg,
        })
      })
      .catch(error => alert(error.message))
    console.log('REGISTER')
  }, [email, imageUrl, name, password])

  useLayoutEffect(() => {
    setOptions({
      headerTitle: '',
      headerBackTitleVisible: true,
      headerBackTitle: 'Back to Login',
    } as StackHeaderOptions)
  }, [setOptions])

  return (
    <S.Container>
      <S.SubHeader>
        <S.Text>Create a Signal account</S.Text>
        <S.Img
          source={{
            uri:
              'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png',
          }}
        />
      </S.SubHeader>
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
        <Input
          placeholder="Confirm Password"
          secureTextEntry
          keyboardType="default"
          value={confirmPassword}
          onChangeText={e => setConfirmPassword(e)}
        />
        <Input
          placeholder="Profile Picture URL (optional)"
          secureTextEntry
          keyboardType="default"
          value={imageUrl}
          onChangeText={e => setImageUrl(e)}
          onSubmitEditing={register}
        />
      </S.InputContainer>
      <S.Btn
        title="Register"
        raised
        onPress={register}
        containerStyle={{ width: 200 }}
      />
      {Platform.OS === 'ios' && <S.PadBot />}
    </S.Container>
  )
}

export default Register
