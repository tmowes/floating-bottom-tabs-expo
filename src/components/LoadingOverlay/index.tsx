import React from 'react'
import { ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components/native'
import { useLoading } from '../../hooks'

import * as S from './styles'

const LoadingOverlay: React.FC = () => {
  const { colors } = useTheme()
  const { loading } = useLoading()

  if (loading) {
    return (
      <S.Container>
        <ActivityIndicator size={64} color={colors.orange} />
        <S.Title>Carregando...</S.Title>
      </S.Container>
    )
  }
  return <S.Frag />
}

export default LoadingOverlay
