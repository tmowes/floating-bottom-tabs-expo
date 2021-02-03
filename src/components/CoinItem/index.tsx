import React, { useMemo } from 'react'
import * as S from './styles'
import { CoinItemProps } from './types'

const CoinItem = ({ coinData }: CoinItemProps) => {
  const { id, rank, symbol, name, quote } = coinData
  const { price, volume_24h, percent_change_1h } = quote.USD

  const percentChange1h = useMemo(() => {
    return `${percent_change_1h.toFixed(2)}%`
  }, [percent_change_1h])

  const formattedPrice = useMemo(() => price.toFixed(2), [price])
  const formattedVol = useMemo(() => volume_24h.toFixed(2), [volume_24h])

  const isPositive = useMemo(() => percent_change_1h >= 0, [percent_change_1h])

  return (
    <S.Container>
      <S.Icon
        source={{
          uri: `https://s2.coinmarketcap.com/static/img/coins/32x32/${id}.png`,
        }}
      />
      <S.Info>
        <S.Title>{name}</S.Title>
        <S.BottomInfo>
          <S.IdView>
            <S.Id>{rank}</S.Id>
          </S.IdView>
          <S.Symbol>{symbol}</S.Symbol>
          <S.DirectionIcon isPositive={isPositive} />
          <S.Change>{percentChange1h}</S.Change>
        </S.BottomInfo>
      </S.Info>
      <S.Graph />
      <S.Column>
        <S.Price>{formattedPrice}</S.Price>
        <S.Price>{formattedVol}</S.Price>
      </S.Column>
    </S.Container>
  )
}

export default CoinItem
