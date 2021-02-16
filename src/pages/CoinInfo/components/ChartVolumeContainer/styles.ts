import { Dimensions } from 'react-native'
import styled, { css } from 'styled-components/native'

export const { width: sWidth, height: sHeight } = Dimensions.get('screen')

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  height: ${sWidth / 3}px;
  width: 94%;
  flex-direction: row;
`
export const Text = styled.Text``
