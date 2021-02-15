import { Dispatch, SetStateAction } from 'react'

export type ChartFiltersProps = {
  activeFilter: FilterOptions
  setActiveFilter: Dispatch<SetStateAction<FilterOptions>>
}

export type FilterOptions = {
  id: string
  period: string
  interval: string
}
