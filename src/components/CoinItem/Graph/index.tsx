import axios from 'axios'
import { subHours } from 'date-fns'
import React, { useCallback, useEffect, useState } from 'react'
import { LineChart } from 'react-native-svg-charts'
import { useTheme } from 'styled-components'
import { chartDataUrl } from '../../../utils'
import * as S from './styles'
import { GraphProps } from './types'

const Graph = ({ id, isPositive }: GraphProps) => {
  const { colors } = useTheme()
  const [chartData, setChartData] = useState([])

  const graphData = useCallback(async () => {
    const convert = 'USD'
    const format = 'chart'
    const interval = '1h'
    const time_end = new Date().getTime()
    const time_start = subHours(new Date(), 72).getTime()
    const { data } = await axios.get(chartDataUrl(), {
      params: {
        id,
        convert,
        format,
        interval,
        time_end,
        time_start,
      },
    })
    const chartValue = Object.values(data)
      .map((key: string) => Object.values(key))[1]
      .map(value => Number(value[id]))
    setChartData(chartValue)
  }, [id])

  useEffect(() => {
    graphData()
  }, [graphData])

  return (
    <S.Container>
      <LineChart
        style={{ flex: 1 }}
        data={chartData}
        svg={{ stroke: isPositive ? '#0f0' : '#f00' }}
        contentInset={{ top: 4, bottom: 4 }}
      />
    </S.Container>
  )
}

export default Graph
