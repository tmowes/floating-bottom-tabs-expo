import styled, { css } from 'styled-components/native'

import { Button, Image } from 'react-native-elements'
import { Platform } from 'react-native'

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : undefined,
  enabled: true,
})`
  ${({ theme: { colors } }) => css`
    flex: 1;
    width: 100%;
    background: ${colors.backgroundColor};
    align-items: center;
    justify-content: center;
    padding: 10px;
  `}
`

export const Text = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodWhiteLight};
    font-size: 22px;
    font-weight: bold;
  `}
`

export const Img = styled(Image)`
  width: 200px;
  height: 200px;
`

export const InputContainer = styled.View`
  width: 100%;
`

export const Btn = styled(Button)``

export const PadBot = styled.View`
  height: 100px;
`
