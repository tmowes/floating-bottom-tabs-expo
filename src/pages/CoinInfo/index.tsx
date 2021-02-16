import { RouteProp, useRoute } from '@react-navigation/native'
import axios from 'axios'
import cheerio from 'cheerio'
import { subMilliseconds } from 'date-fns'
import ms from 'ms'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { CoinInfoShowData } from '../../@types/types'
import { useLoading } from '../../hooks'
import { chartDataUrl } from '../../utils'
import {
  ChartContainer,
  ChartFilters,
  ChartVolumeContainer,
  Header,
  HeaderInfo,
} from './components'
import { filterOptions } from './components/ChartFilters/data'
import * as S from './styles'
import { CoinInfoParams } from './types'

const CoinInfo = () => {
  const { setLoading } = useLoading()
  const [infoShow, setInfoShow] = useState<CoinInfoShowData>(
    {} as CoinInfoShowData,
  )
  const [activeFilter, setActiveFilter] = useState(filterOptions[1])
  const [chartData, setChartData] = useState<number[]>([])
  const [charBarData, setCharBarData] = useState<number[]>([])

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

  const getChartData = useCallback(async () => {
    const convert = 'USD'
    const format = 'chart_crypto_details'
    const { interval, period } = activeFilter

    const time_end = new Date().getTime()
    const time_start = subMilliseconds(new Date(), ms(period)).getTime()

    const { data } = await axios.get(chartDataUrl(), {
      params: { id, convert, format, interval, time_end, time_start },
    })
    const chartValue = Object.values(data.data).map((key: any) => key.USD[0])
    const chartVolume = Object.values(data.data).map((key: any) => key.USD[1])

    setChartData(chartValue)
    setCharBarData(chartVolume)
  }, [activeFilter, id])

  const priceChangePercentage = useMemo(() => {
    const firstValue = chartData[chartData.length - 1]
    const laststValue = chartData[0]

    const PercentageDiff = (firstValue / laststValue - 1) * 100
    console.log({ firstValue, laststValue, PercentageDiff })

    return PercentageDiff
  }, [chartData])

  useEffect(() => {
    getInfo()
  }, [getInfo])

  useEffect(() => {
    getChartData()
  }, [getChartData])

  const { category, dateAdded, name, statistics, symbol } = infoShow

  return (
    <S.Container>
      <Header id={id} />
      <HeaderInfo
        name={name}
        symbol={symbol}
        priceChangePercentage={priceChangePercentage}
        price={statistics?.price}
      />
      <ChartFilters
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <ChartContainer chartData={chartData} />
      <ChartVolumeContainer charBarData={charBarData} />
    </S.Container>
  )
}

export default CoinInfo
