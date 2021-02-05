import { Entypo } from '@expo/vector-icons'
import styled, { css } from 'styled-components/native'
import { PositiveStyle } from './types'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    margin-bottom: 4px;
    background: ${colors.inputs};
    padding: 4px 0;
    border-bottom-width: 1px;
    border-radius: 8px;
    margin: 0 8px 4px;
  `}
`

export const Icon = styled.Image`
  width: 32px;
  height: 32px;
  margin: 0 8px;
`

export const Title = styled.Text`
  flex: 1;
  color: whitesmoke;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
`

export const Info = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 8px;
`

export const BottomInfo = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const IdView = styled.View`
  ${({ theme: { colors } }) => css`
    background: ${colors.grayHard};
    padding: 0 3px;
    border-radius: 4px;
    margin-right: 4px;
    align-items: center;
    justify-content: center;
    min-width: 16px;
  `}
`

export const Id = styled.Text`
  color: whitesmoke;
  font-size: 12px;
`

export const Symbol = styled.Text`
  color: whitesmoke;
  font-size: 12px;
  margin-right: 4px;
`

export const SymbolView = styled.View`
  flex-direction: row;
`

export const ChangeView = styled.View`
  flex-direction: row;
`

export const DirectionIcon = styled(Entypo).attrs({
  name: 'triangle-down',
  size: 16,
})<PositiveStyle>`
  ${({ isPositive }) => css`
    color: #f00;
    margin-left: 4px;
    ${isPositive &&
    css`
      color: #0f0;
      transform: rotate(180deg);
    `}
  `}
`
export const Change = styled.Text`
  font-size: 12px;
  color: gainsboro;
`

export const Column = styled.View`
  flex: 0.6;
  align-items: flex-end;
  justify-content: space-around;
  margin-right: 8px;
`

export const Graph = styled.View``

export const Price = styled.Text`
  align-self: flex-end;
  color: whitesmoke;
  font-size: 14px;
`
