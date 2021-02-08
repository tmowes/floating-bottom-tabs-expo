import { BorderlessButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    background: ${colors.backgroundColor};
    align-items: center;
    justify-content: center;
  `}
`

export const Title = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodWhiteLight};
    font-size: 22px;
    font-weight: bold;
  `}
`

export const AvatarView = styled.View`
  ${({ theme: { colors } }) => css`
    margin-left: 16px;
  `}
`
export const LogoutButton = styled.TouchableOpacity`
  ${({ theme: { colors } }) => css``}
`
