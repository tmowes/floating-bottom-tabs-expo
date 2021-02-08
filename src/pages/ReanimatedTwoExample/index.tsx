import React, { useCallback } from 'react'
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import * as S from './styles'

const ReanimatedTwoExample: React.FC = () => {
  const randomWidth = useSharedValue(10)

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  }

  const animatedBar = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    }
  })
  const handleAnimation = useCallback(() => {
    const newRandomWidth = Math.random() * 350
    // eslint-disable-next-line no-return-assign
    return (randomWidth.value = newRandomWidth)
  }, [randomWidth])

  return (
    <S.Container>
      <S.AnimatedBar style={animatedBar} />
      <S.Button onPress={handleAnimation}>
        <S.Title>Toggle</S.Title>
      </S.Button>
      <S.Img source={{ uri: 'https://github.com/tmowes.png' }} />
    </S.Container>
  )
}

export default ReanimatedTwoExample
