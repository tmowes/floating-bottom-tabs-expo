import { RectButton } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: ${colors.backgroundColor};
  `}
`

export const AnimatedBar = styled(Animated.View)`
  ${({ theme: { colors } }) => css`
    width: 100px;
    height: 80px;
    background: ${colors.uberMessage};
    margin: 30px;
    align-items: center;
    border-radius: 16px;
  `}
`

export const Button = styled(RectButton)`
  ${({ theme: { colors } }) => css`
    background: ${colors.orange};
    padding: 8px 32px;
    border-radius: 16px;
  `}
`

export const Title = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodWhiteIsh};
  `}
`

export const Img = styled.Image`
  width: 64px;
  height: 64px;
`
