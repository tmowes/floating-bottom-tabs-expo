import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 21px;
`

export const InputContainer = styled.View`
  width: 100%;
`
export const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 22px;
  margin: auto 0;
`
export const Actions = styled(RectButton)`
  background: orangered;
  min-width: 66%;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  margin: 32px;
  border-radius: 8px;
`
