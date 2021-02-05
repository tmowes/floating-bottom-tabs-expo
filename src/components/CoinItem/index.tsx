import React, { useMemo } from 'react'
import Graph from './Graph'
import * as S from './styles'
import { CoinItemProps } from './types'

const CoinItem = ({ coinData }: CoinItemProps) => {
  const { id, rank, symbol, name, quote } = coinData
  const { price, volume_24h, percent_change_1h, percent_change_24h } = quote.USD

  const percentChange1h = useMemo(() => {
    return `${percent_change_1h.toFixed(2)}%`
  }, [percent_change_1h])

  const percentChange24h = useMemo(() => {
    return `${Math.abs(percent_change_24h).toFixed(2)}%`
  }, [percent_change_24h])

  const formattedPrice = useMemo(() => price.toFixed(2), [price])

  const formattedVol = useMemo(() => volume_24h.toFixed(2), [volume_24h])

  const isPositive = useMemo(() => percent_change_24h >= 0, [
    percent_change_24h,
  ])

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
          <S.SymbolView>
            <S.IdView>
              <S.Id>{rank}</S.Id>
            </S.IdView>
            <S.Symbol>{symbol}</S.Symbol>
          </S.SymbolView>

          <S.ChangeView>
            <S.DirectionIcon isPositive={isPositive} />
            <S.Change>{percentChange24h}</S.Change>
          </S.ChangeView>
        </S.BottomInfo>
      </S.Info>
      <Graph id={id} isPositive={isPositive} />
      <S.Column>
        <S.Price>{formattedPrice}</S.Price>
      </S.Column>
    </S.Container>
  )
}

export default CoinItem
