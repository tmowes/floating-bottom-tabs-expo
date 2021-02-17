import { Dimensions } from 'react-native'
import styled, { css } from 'styled-components/native'
import { YAxis } from 'react-native-svg-charts'

export const { width: sWidth, height: sHeight } = Dimensions.get('screen')

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  height: ${sWidth}px;
  width: 94%;
  flex-direction: row;
`
export const Text = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.error};
    font-size: 20px;
  `}
`

export const Frag = styled.View``

export const VerticalAxis = styled(YAxis)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 9999;
`
