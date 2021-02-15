import { RouteProp, useRoute } from '@react-navigation/native'
import axios from 'axios'
import cheerio from 'cheerio'
import React, { useCallback, useEffect, useState } from 'react'
import { CoinInfoShowData } from '../../@types/types'
import { useLoading } from '../../hooks'
import { ChartFilters, Header, HeaderInfo } from './components'
import { filterOptions } from './components/ChartFilters/data'
import * as S from './styles'
import { CoinInfoParams } from './types'

const CoinInfo = () => {
  const { setLoading } = useLoading()
  const [infoShow, setInfoShow] = useState<CoinInfoShowData>(
    {} as CoinInfoShowData,
  )
  const [activeFilter, setActiveFilter] = useState(filterOptions[1])

  const {
    params: { id, slug },
  } = useRoute<RouteProp<CoinInfoParams, 'CoinInfo'>>()

  const getInfo = useCallback(async () => {
    setLoading(true)
    const { data } = await axios.get(
      `https://coinmarketcap.com/currencies/${slug}`,
    )
    const $ = cheerio.load(data)
    const dataJson = JSON.parse($('#__NEXT_DATA__').html() as string)
    setInfoShow(dataJson.props.initialProps.pageProps.info)
    setLoading(false)
  }, [setLoading, slug])

  useEffect(() => {
    getInfo()
  }, [getInfo])

  const { category, dateAdded, name, statistics, symbol } = infoShow

  return (
    <S.Container>
      <Header id={id} />
      <HeaderInfo
        name={name}
        symbol={symbol}
        priceChangePercentage24h={statistics?.priceChangePercentage24h}
        price={statistics?.price}
      />
      <ChartFilters
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
    </S.Container>
  )
}

export default CoinInfo
