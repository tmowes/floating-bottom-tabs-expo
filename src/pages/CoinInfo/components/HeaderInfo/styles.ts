import { Entypo } from '@expo/vector-icons'
import styled, { css } from 'styled-components/native'
import { PositiveStyle } from './types'

export const Container = styled.View`
  width: 100%;
  padding: 0 16px;
`
export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
`

export const Text = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${`${colors.foodWhiteLighter}`};
    font-size: 18px;
    line-height: 20px;
  `}
`
export const CoinName = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${`${colors.foodWhiteLighter}90`};
    font-size: 16px;
    line-height: 20px;
  `}
`

export const ChangeValue = styled.Text`
  color: white;
  font-size: 16px;
  line-height: 20px;
`

export const ChangeBox = styled.View<PositiveStyle>`
  ${({ isPositive, theme: { colors } }) => css`
    background: ${`${colors.negative}33`};
    padding: 4px 4px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    min-width: 16px;
    margin-left: auto;
    flex-direction: row;
    ${isPositive &&
    css`
      background: ${`${colors.positive}33`};
    `}
  `}
`
export const DirectionIcon = styled(Entypo).attrs({
  name: 'triangle-down',
  size: 18,
})<PositiveStyle>`
  ${({ isPositive, theme: { colors } }) => css`
    color: ${colors.negative};
    margin-right: 4px;
    ${isPositive &&
    css`
      color: ${colors.positive};
      transform: rotate(180deg);
    `}
  `}
`
