import {
  RouteProp,
  StackActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import firebase from 'firebase'
import React, { useCallback, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { Input } from 'react-native-elements'
import { useTheme } from 'styled-components/native'
import {
  FirebaseStorageError,
  UploadTaskSnapshot,
} from '../../../../@types/types'
import { useLoading } from '../../../../hooks'
import { auth, db, storage } from '../../../../secrets'
import * as S from './styles'
import { InstaSaveParams } from './types'

const InstaSave = () => {
  const { loading, setLoading } = useLoading()
  const { colors } = useTheme()
  const { dispatch } = useNavigation()
  const {
    params: { image },
  } = useRoute<RouteProp<InstaSaveParams, 'InstaSave'>>()
  const [caption, setCaption] = useState('')

  const savePostData = useCallback(
    (downloadURL: string) => {
      db.collection('posts')
        .doc(auth.currentUser.uid)
        .collection('userPosts')
        .add({
          downloadURL,
          caption,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          dispatch(StackActions.popToTop())
        })
    },
    [caption, dispatch],
  )

  const uploadImage = useCallback(async () => {
    console.log('uploadingImage')
    setLoading(true)

    const response = await fetch(image)
    const blob = await response.blob()
    const task = storage
      .ref()
      .child(`post/${auth.currentUser.uid}/${Math.random().toString(36)}`)
      .put(blob)

    const taskProgress = (snapshot: UploadTaskSnapshot) => {
      console.log(`transferred: ${snapshot.bytesTransferred}`)
      console.log(
        `percentage: ${
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        }`,
      )
    }

    const taskCompleted = () => {
      task.snapshot.ref.getDownloadURL().then(downloadURL => {
        savePostData(downloadURL)
      })
    }

    const taskError = (snapshot: FirebaseStorageError) => {
      console.log(snapshot.message)
    }

    task.on('state_changed', taskProgress, taskError, taskCompleted)
    setLoading(false)
  }, [image, savePostData, setLoading])

  return (
    <S.Container>
      {image && <S.Image source={{ uri: image }} resizeMode="cover" />}
      <Input
        placeholder="Caption"
        keyboardType="default"
        value={caption}
        onChangeText={e => setCaption(e)}
      />
      <S.Button onPress={uploadImage}>
        <S.Text>Upload</S.Text>
        {loading && <ActivityIndicator size="small" color={colors.orange} />}
      </S.Button>
    </S.Container>
  )
}

export default InstaSave
