import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const AnimatedBar = styled(Animated.View)`
  width: 100px;
  height: 80px;
  background-color: orange;
  margin: 30px;
  align-items: center;
`
export const Title = styled.Text`
  color: whitesmoke;
  font-weight: bold;
`
