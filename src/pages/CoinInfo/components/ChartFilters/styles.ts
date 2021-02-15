import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    /* background: red; */
    width: 100%;
    margin: 8px 0;
  `}
`

export const Text = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${`${colors.foodWhiteLighter}`};
    font-size: 18px;
    line-height: 20px;
  `}
`

export const ButtonView = styled.View`
  ${({ theme: { colors } }) => css`
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    margin: 0 4px;
    min-width: 44px;
    border-color: ${colors.orange};
    border-width: 1px;
    overflow: hidden;
    /* background: ${`${colors.orange}`}; */
  `}
`

export const FilterButton = styled(RectButton).attrs({})`
  ${({ theme: { colors } }) => css`
    /* background: ${`${colors.orange}`}; */
    align-items: center;
    justify-content: center;
    padding: 4px 0;
    width: 100%;
  `}
`
export const FilterList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``
