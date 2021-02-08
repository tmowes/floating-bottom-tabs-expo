import axios from 'axios'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { CoinInfo } from '../../@types/types'
import * as C from '../../components'
import { coin } from '../../services'
import * as S from './styles'

const Home: React.FC = () => {
  const [renderData, setRenderData] = useState<CoinInfo[]>([])
  const currentPage = useRef(1)
  const loadingRef = useRef(false)

  const getItemLayout = useCallback((data, index) => {
    return {
      length: 48,
      offset: 48 * index,
      index,
    }
  }, [])

  const loadMoreCoins = useCallback(async () => {
    if (!loadingRef.current) {
      loadingRef.current = true
      try {
        currentPage.current += 1
        const { data } = await coin.get<CoinInfo[]>('/', {
          params: { page: currentPage.current },
        })
        setRenderData(previousState => [...previousState, ...data])
      } catch (err) {
        currentPage.current -= 1
        console.error(err.message)
      }
      loadingRef.current = false
    }
  }, [])

  const getCoins = useCallback(async () => {
    currentPage.current = 1
    loadingRef.current = true
    const { data } = await coin.get<CoinInfo[]>('/', {
      params: { page: currentPage.current },
    })
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
        getItemLayout={getItemLayout}
        onEndReached={loadMoreCoins}
        onEndReachedThreshold={0.1}
        ListHeaderComponent={
          loadingRef.current && <ActivityIndicator size="large" />
        }
        // onRefresh
      />
    </S.Container>
  )
}

export default Home
