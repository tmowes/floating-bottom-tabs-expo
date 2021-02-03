import React, { useCallback, useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { CoinInfo } from '../../@types/types'
import { coin } from '../../services'

import * as C from '../../components'
import * as S from './styles'

const Home: React.FC = () => {
  const [renderData, setRenderData] = useState<CoinInfo[]>([])

  const getCoins = useCallback(async () => {
    const { data } = await coin.get<CoinInfo[]>('/')
    setRenderData(data)
  }, [])

  useEffect(() => {
    getCoins()
  }, [getCoins])

  return (
    <S.Container>
      <S.CoinList
        keyExtractor={({ id }) => String(id)}
        data={renderData}
        renderItem={({ item }) => <C.CoinItem coinData={item} />}
      />
    </S.Container>
  )
}

export default Home
