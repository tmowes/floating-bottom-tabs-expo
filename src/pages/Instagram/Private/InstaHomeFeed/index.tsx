import React, { useEffect } from 'react'
import { useStateValue } from '../../../../hooks'

import * as S from './styles'

const InstaHomeFeed = () => {
  const [state, dispatch] = useStateValue()

  useEffect(() => {
    console.log('SET_USER')
  }, [])
  return (
    <S.Container>
      <S.Title>InstaHomeFeed</S.Title>
    </S.Container>
  )
}

export default InstaHomeFeed
