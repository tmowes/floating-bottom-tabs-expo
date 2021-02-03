export interface CoinInfo {
  id: number
  name: string
  symbol: string
  slug: string
  max_supply: number
  circulating_supply: number
  total_supply: number
  last_updated: Date
  quote: Quote
  rank: number
  noLazyLoad: boolean
}

export interface Quote {
  USD: Usd
}

export interface Usd {
  price: number
  volume_24h: number
  percent_change_1h: number
  percent_change_24h: number
  percent_change_7d: number
  percent_change_30d: number
  market_cap: number
  last_updated: Date
}
