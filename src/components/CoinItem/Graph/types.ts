export type GraphProps = {
  id: number
  isPositive: boolean
}

// export type ChartData = { [key: string]: { [key: string]: number[] } }

export type ChartData = {
  status: Status
  data: { [key: string]: Datum }
}

export type Datum = {
  id: number
  other_total_market_cap: number
  global: number
}

export type Status = {
  timestamp: Date
  error_code: number
  error_message: null
  elapsed: number
  credit_count: number
  notice: null
}
