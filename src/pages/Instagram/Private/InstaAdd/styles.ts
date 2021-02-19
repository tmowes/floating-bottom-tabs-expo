import { Camera } from 'expo-camera'
import { RectButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
  `}
`

export const Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 22px;
`
export const CamContainer = styled.View`
  flex: 1;
`

export const CameraView = styled(Camera)`
  flex: 1;
  aspect-ratio: 1;
`

export const ButtonView = styled.View``

export const Button = styled(RectButton)`
  ${({ theme: { colors } }) => css`
    background: ${colors.orange};
    min-width: 66%;
    min-height: 48px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin-bottom: 4px;
  `}
`

export const Image = styled.Image`
  flex: 1;
`
