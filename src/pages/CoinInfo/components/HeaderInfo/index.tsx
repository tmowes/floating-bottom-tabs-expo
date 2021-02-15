import React, { useMemo } from 'react'
import { formatCurrency } from '../../../../utils'

import * as S from './styles'
import { HeaderInfoProps } from './types'

const HeaderInfo = (props: HeaderInfoProps) => {
  const { name, symbol, price = 0, priceChangePercentage24h = 0 } = props

  const formattedPrice = useMemo(() => formatCurrency(price), [price])

  const percentFormat = useMemo(() => {
    const isPositive = priceChangePercentage24h > 0
    const Percentage24 = `${Math.abs(priceChangePercentage24h).toFixed(2)}%`
    return { isPositive, Percentage24 }
  }, [priceChangePercentage24h])

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
          <S.ChangeValue>{percentFormat.Percentage24}</S.ChangeValue>
        </S.ChangeBox>
      </S.Row>
    </S.Container>
  )
}

export default HeaderInfo
