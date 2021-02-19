import { RectButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: ${colors.backgroundColor};
  `}
`

export const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 22px;
  margin: auto 0;
`
export const Text = styled.Text`
  color: white;
  font-weight: bold;
`

export const Actions = styled(RectButton)`
  background: orangered;
  min-width: 66%;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  margin: 8px;
  border-radius: 8px;
`

export const Footer = styled.View`
  flex: 0.1;
  align-items: center;
  justify-content: center;
`
