import { AntDesign, Feather } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`

export const Text = styled.Text`
  color: white;
`

export const CoinImage = styled.Image`
  width: 48px;
  height: 48px;
`

export const FavButton = styled(BorderlessButton)`
  align-items: center;
  justify-content: center;
  margin-left: auto;
`
export const BackButton = styled(BorderlessButton)`
  align-items: center;
  justify-content: center;
`

export const FavIcon = styled(AntDesign).attrs({
  size: 26,
})`
  ${({ theme: { colors } }) => css`
    color: ${colors.orange};
  `}
`

export const CloseIcon = styled(Feather).attrs({
  size: 26,
})`
  ${({ theme: { colors } }) => css`
    color: ${colors.orange};
    margin-left: 16px;
  `}
`
