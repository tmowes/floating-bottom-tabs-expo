import React from 'react'
import { LineChart } from 'react-native-svg-charts'
import * as S from './styles'
import { GraphProps } from './types'

const Graph = ({ id, isPositive, chartData }: GraphProps) => {
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
