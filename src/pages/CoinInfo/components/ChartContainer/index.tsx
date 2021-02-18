import { curveNatural } from 'd3-shape'
import React, { useCallback, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { AreaChart, Grid } from 'react-native-svg-charts'
import { useTheme } from 'styled-components/native'
import { formatCurrency } from '../../../../utils'
import * as S from './styles'
import { ChartContainerProps } from './types'

const ChartContainer = ({ chartData }: ChartContainerProps) => {
  const { colors } = useTheme()
  const isPositive = chartData[chartData.length - 1] - chartData[0] >= 0

  const formatLabel = useCallback((value: number) => formatCurrency(value), [])

  const chartColor = isPositive ? colors.positive : colors.negative
  const [chartSize, setChartSize] = useState({
    width: 100,
    height: 100,
  })
  const contentInset = { top: 30, bottom: 30 }
  return (
    <S.Container
      onLayout={({ nativeEvent }) =>
        setChartSize({
          height: nativeEvent.layout.height,
          width: nativeEvent.layout.width,
        })
      }
    >
      {chartData.length === 0 ? (
        <S.Frag>
          <ActivityIndicator size={64} color={colors.orange} />
          <S.Text>Carregando gráfico...</S.Text>
        </S.Frag>
      ) : (
        <>
          <S.VerticalAxis
            data={chartData}
            contentInset={contentInset}
            svg={{
              fill: colors.foodWhiteLight,
              fontSize: 12,
            }}
            numberOfTicks={8}
            formatLabel={formatLabel}
          />
          <AreaChart
            style={{ ...chartSize }}
            data={chartData}
            contentInset={contentInset}
            curve={curveNatural}
            svg={{ fill: `${chartColor}4d`, stroke: chartColor }}
          >
            <Grid svg={{ stroke: `${colors.orange}4d` }} />
          </AreaChart>
        </>
      )}
    </S.Container>
  )
}

export default ChartContainer
