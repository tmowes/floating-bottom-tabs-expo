import { Camera } from 'expo-camera'
import React, { useCallback, useEffect, useState } from 'react'
import * as Picker from 'expo-image-picker'
import { useNavigation } from '@react-navigation/native'
import * as S from './styles'

const InstaAdd = () => {
  const { navigate } = useNavigation()
  const [hasCamPermission, setHasCamPermission] = useState(null)
  const [hasPickerPermission, setHasPickerPermission] = useState(null)
  const [camRef, setCamRef] = useState(null)
  const [image, setImage] = useState<string | null>(null)
  const [type, setType] = useState<number>(Camera.Constants.Type.back)

  useEffect(() => {
    const getPermissions = async () => {
      const { status: camStatus } = await Camera.requestPermissionsAsync()
      setHasCamPermission(camStatus === 'granted')
      const {
        status: pickerStatus,
      } = await Picker.requestMediaLibraryPermissionsAsync()
      setHasPickerPermission(pickerStatus === 'granted')
    }
    getPermissions()
  }, [])

  const changeCameraType = useCallback(() => {
    console.log(JSON.stringify(type))

    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    )
  }, [type])

  const takeAPicture = useCallback(async () => {
    // console.log('takeAPicture')
    if (camRef) {
      // console.log('camRef')
      // console.log(camRef)
      // const data = await camRef.takePictureAsync()
      // console.log(data.uri)
      setImage('https://github.com/tmowes.png')
    }
  }, [camRef])

  const pickImage = useCallback(async () => {
    const result = await Picker.launchImageLibraryAsync({
      mediaTypes: Picker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })

    if (result.cancelled === false) {
      setImage(result.uri)
    }
  }, [])
  const navigateToSave = useCallback(() => {
    navigate('InstaSave', { image })
  }, [image, navigate])

  if (hasCamPermission === null || hasPickerPermission === null) {
    return <S.Container />
  }
  if (hasCamPermission === false || hasPickerPermission === false) {
    return <S.Text>no permissions to access camera and gallery</S.Text>
  }

  return (
    <S.Container>
      <S.CamContainer>
        <S.CameraView ref={ref => setCamRef(ref)} type={type} ratio="1:1" />
      </S.CamContainer>
      <S.ButtonView>
        <S.Button onPress={changeCameraType}>
          <S.Text>Flip camera</S.Text>
        </S.Button>
        <S.Button onPress={takeAPicture}>
          <S.Text>Take a picture</S.Text>
        </S.Button>
        <S.Button onPress={pickImage}>
          <S.Text>Gallery Image</S.Text>
        </S.Button>
        <S.Button onPress={navigateToSave}>
          <S.Text>Save</S.Text>
        </S.Button>
      </S.ButtonView>
      {image && <S.Image source={{ uri: image }} resizeMode="cover" />}
    </S.Container>
  )
}

export default InstaAdd
