import React from 'react'
import { useTheme } from 'styled-components/native'
import { filterOptions } from './data'
import * as S from './styles'
import { ChartFiltersProps } from './types'

const ChartFilters = (props: ChartFiltersProps) => {
  const { activeFilter, setActiveFilter } = props
  const { colors } = useTheme()
  return (
    <S.Container>
      <S.FilterList>
        {filterOptions.map(({ id, period, interval }) => (
          <S.ButtonView key={id}>
            <S.FilterButton
              onPress={() => setActiveFilter({ id, period, interval })}
              isActive={period === activeFilter.period}
              rippleColor={`${colors.orange}40`}
            >
              <S.Text>{period}</S.Text>
            </S.FilterButton>
          </S.ButtonView>
        ))}
      </S.FilterList>
    </S.Container>
  )
}

export default ChartFilters
