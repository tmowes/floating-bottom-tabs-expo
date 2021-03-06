import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { BarChart } from 'react-native-svg-charts'
import { useTheme } from 'styled-components/native'
import * as S from './styles'
import { ChartVolumeContainerProps } from './types'

const ChartVolumeContainer = ({ charBarData }: ChartVolumeContainerProps) => {
  const { colors } = useTheme()

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
      {charBarData.length === 0 ? (
        <S.Frag>
          <ActivityIndicator size={64} color={colors.orange} />
          <S.Text>Carregando gráfico...</S.Text>
        </S.Frag>
      ) : (
        <BarChart
          style={{ ...chartSize }}
          data={charBarData}
          contentInset={contentInset}
          animate={true}
          spacingInner={0.2}
          svg={{
            fill: `${colors.orange}80`,
            stroke: `${colors.orange}`,
          }}
        />
      )}
    </S.Container>
  )
}

export default ChartVolumeContainer
