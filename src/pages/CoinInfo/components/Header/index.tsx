import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'

import * as S from './styles'
import { HeaderProps } from './types'

const Header = ({ id }: HeaderProps) => {
  const [favorite, setFavorite] = useState(false)
  const { goBack } = useNavigation()
  const { colors } = useTheme()
  return (
    <S.Container>
      <S.CoinImage
        source={{
          uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`,
        }}
      />
      <S.FavButton
        onPress={() => setFavorite(prev => !prev)}
        rippleColor={`${colors.orange}40`}
      >
        <S.FavIcon name={favorite ? 'star' : 'staro'} />
      </S.FavButton>
      <S.BackButton onPress={goBack} rippleColor={`${colors.orange}40`}>
        <S.CloseIcon name="x" />
      </S.BackButton>
    </S.Container>
  )
}

export default Header
