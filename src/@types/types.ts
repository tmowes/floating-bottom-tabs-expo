import firebase from 'firebase'

export interface CoinInfoData {
  id: number
  name: string
  symbol: string
  slug: string
  max_supply: number
  circulating_supply: number
  total_supply: number
  last_updated: Date
  quote: Quote
  cmc_rank: number
  chartData: number[]
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

export interface CoinInfoShowData {
  id: number
  name: string
  symbol: string
  slug: string
  category: string
  description: string
  dateAdded: Date
  status: string
  notice: string
  latestUpdateTime: Date
  watchCount: string
  tags: Tag[]
  urls: Urls
  volume: number
  volumeChangePercentage24h: number
  statistics: Statistics
  platforms: Platform[]
  relatedCoins: RelatedCoin[]
  relatedExchanges: RelatedExchange[]
  selfReportedTags: any[]
}

export interface Platform {
  contractId: number
  contractAddress: string
  contractPlatform: string
}

export interface RelatedCoin {
  id: number
  name: string
  slug: string
  price: number
  priceChangePercentage24h: number
  priceChangePercentage7d: number
}

export interface RelatedExchange {
  id: number
  name: string
  slug: string
}

export interface Statistics {
  price: number
  priceChangePercentage24h: number
  marketCap: number
  marketCapChangePercentage24h: number
  fullyDilutedMarketCap: number
  fullyDilutedMarketCapChangePercentage24h: number
  circulatingSupply: number
  totalSupply: number
  maxSupply: number
  marketCapDominance: number
  rank: number
  roi: number
  low24h: number
  high24h: number
  low7d: number
  high7d: number
  low30d: number
  high30d: number
  low90d: number
  high90d: number
  low52w: number
  high52w: number
  lowAllTime: number
  highAllTime: number
  lowAllTimeChangePercentage: number
  highAllTimeChangePercentage: number
  lowAllTimeTimestamp: Date
  highAllTimeTimestamp: Date
  lowYesterday: number
  highYesterday: number
  openYesterday: number
  closeYesterday: number
  priceChangePercentageYesterday: number
  volumeYesterday: number
  status: string
}

export interface Tag {
  slug: string
  name: string
  category: string
}

export interface Urls {
  website: string[]
  technical_doc: string[]
  explorer: string[]
  source_code: string[]
  message_board: string[]
  chat: any[]
  announcement: any[]
  reddit: string[]
  twitter: string[]
}

export interface AuthUser {
  user: User
  credential: null
  additionalUserInfo: AdditionalUserInfo
  operationType: string
}

export interface AdditionalUserInfo {
  providerId: string
  isNewUser: boolean
}

export interface User {
  uid: string
  displayName: null
  photoURL: null
  email: string
  emailVerified: boolean
  phoneNumber: null
  isAnonymous: boolean
  tenantId: null
  providerData: ProviderDatum[]
  apiKey: string
  appName: string
  authDomain: string
  stsTokenManager: StsTokenManager
  redirectEventId: null
  lastLoginAt: string
  createdAt: string
  multiFactor: MultiFactor
}

export interface MultiFactor {
  enrolledFactors: any[]
}

export interface ProviderDatum {
  uid: string
  displayName: null
  photoURL: null
  email: string
  phoneNumber: null
  providerId: string
}

export interface StsTokenManager {
  apiKey: string
  refreshToken: string
  accessToken: string
  expirationTime: number
}

export interface UploadTaskSnapshot {
  /**
   * The number of bytes that have been successfully uploaded so far.
   */
  bytesTransferred: number
  /**
   * Before the upload completes, contains the metadata sent to the server.
   * After the upload completes, contains the metadata sent back from the server.
   */
  metadata: firebase.storage.FullMetadata
  /**
   * The reference that spawned this snapshot's upload task.
   */
  ref: firebase.storage.Reference
  /**
   * The current state of the task.
   */
  state: firebase.storage.TaskState
  /**
   * The task of which this is a snapshot.
   */
  task: firebase.storage.UploadTask
  /**
   * The total number of bytes to be uploaded.
   */
  totalBytes: number
}
