import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: ${colors.backgroundColor};
  `}
`

export const Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 22px;
`
