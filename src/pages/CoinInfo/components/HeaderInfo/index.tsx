import React, { useMemo } from 'react'
import { formatCurrency } from '../../../../utils'

import * as S from './styles'
import { HeaderInfoProps } from './types'

const HeaderInfo = (props: HeaderInfoProps) => {
  const { name, symbol, price = 0, priceChangePercentage } = props

  const formattedPrice = useMemo(() => formatCurrency(price), [price])

  const percentFormat = useMemo(() => {
    const isPositive = priceChangePercentage > 0
    const Percentage = `${Math.abs(priceChangePercentage).toFixed(2)}%`
    return { isPositive, Percentage }
  }, [priceChangePercentage])

  if (props === undefined) {
    return <></>
  }

  return (
    <S.Container>
      <S.CoinName>{`${name} (${symbol})`}</S.CoinName>
      <S.Row>
        <S.Text>{formattedPrice}</S.Text>
        <S.ChangeBox isPositive={percentFormat.isPositive}>
          <S.DirectionIcon isPositive={percentFormat.isPositive} />
          <S.ChangeValue>{percentFormat.Percentage}</S.ChangeValue>
        </S.ChangeBox>
      </S.Row>
    </S.Container>
  )
}

export default HeaderInfo
