import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useMemo } from 'react'
import { useTheme } from 'styled-components/native'
import { useLoading } from '../../hooks'
import { formatCurrency } from '../../utils'
import Graph from './Graph'
import * as S from './styles'
import { CoinItemProps } from './types'

const CoinItem = ({ coinData }: CoinItemProps) => {
  const { id, cmc_rank, symbol, name, quote, chartData, slug } = coinData
  const { price, volume_24h, percent_change_1h, percent_change_24h } = quote.USD
  const { navigate } = useNavigation()
  const { setLoading } = useLoading()
  const { colors } = useTheme()

  const percentChange1h = useMemo(() => {
    return `${percent_change_1h.toFixed(2)}%`
  }, [percent_change_1h])

  const percentChange24h = useMemo(() => {
    return `${Math.abs(percent_change_24h).toFixed(2)}%`
  }, [percent_change_24h])

  const formattedPrice = useMemo(() => formatCurrency(price), [price])

  const isPositive = useMemo(() => percent_change_24h >= 0, [
    percent_change_24h,
  ])

  const navCoinInfo = useCallback(() => {
    setLoading(true)
    navigate('CoinInfo', { id, slug })
  }, [id, navigate, setLoading, slug])

  return (
    <S.Container onPress={navCoinInfo} rippleColor={`${colors.orange}40`}>
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
              <S.Id>{cmc_rank}</S.Id>
            </S.IdView>
            <S.Symbol>{symbol}</S.Symbol>
          </S.SymbolView>
          <S.ChangeView>
            <S.DirectionIcon isPositive={isPositive} />
            <S.Change>{percentChange24h}</S.Change>
          </S.ChangeView>
        </S.BottomInfo>
      </S.Info>
      <Graph id={id} isPositive={isPositive} chartData={chartData} />
      <S.Column>
        <S.Price>{formattedPrice}</S.Price>
      </S.Column>
    </S.Container>
  )
}

export default CoinItem
