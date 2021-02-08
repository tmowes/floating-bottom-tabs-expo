import React from 'react'
import { Avatar } from 'react-native-elements'
import { placeholderImg } from '../../data'

import * as S from './styles'

const ListItem = () => {
  return (
    <S.Container>
      <Avatar source={{ uri: placeholderImg }} rounded />
      <S.Container.Content>
        <S.Container.Title>ListItem</S.Container.Title>
        <S.Container.Subtitle ellipsizeMode="tail" numberOfLines={1}>
          teste subtitle long
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ListItem
        </S.Container.Subtitle>
      </S.Container.Content>
    </S.Container>
  )
}

export default ListItem
