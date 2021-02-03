import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${`${colors.backgroundColor}4D`};
    align-items: center;
    justify-content: center;
  `}
`

export const Title = styled.Text`
  ${({ theme: { colors } }) => css`
    font-size: 22px;
    color: ${colors.orange};
  `}
`

export const Frag = styled.View``
