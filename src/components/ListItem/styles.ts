import { ListItem } from 'react-native-elements'
import styled, { css } from 'styled-components/native'

export const Container = styled(ListItem)`
  ${({ theme: { colors } }) => css`
    flex: 1;
    background: ${colors.backgroundColor};
    align-items: center;
    justify-content: center;
  `}
`

export const Text = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.foodWhiteLight};
    font-size: 22px;
    font-weight: bold;
  `}
`
