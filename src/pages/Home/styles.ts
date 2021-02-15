import { ComponentType } from 'react'
import { FlatList } from 'react-native'
import Animated from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { CoinInfoData } from '../../@types/types'

export const Container = styled(SafeAreaView)`
  flex: 1;
`

export const AnimatedBar = styled(Animated.View)`
  width: 100px;
  height: 80px;
  background-color: orange;
  margin: 30px;
  align-items: center;
`

export const CoinListOld = styled(FlatList as new () => FlatList<CoinInfoData>)`
  flex: 1;
`

export const CoinList = (styled.FlatList`
  flex: 1;
` as ComponentType) as new <T>() => FlatList<CoinInfoData>
