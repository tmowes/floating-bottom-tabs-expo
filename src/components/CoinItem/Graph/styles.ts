import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    margin: 0 auto;
  `}
`

export const Title = styled.Text`
  flex: 1;
  color: whitesmoke;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
`
