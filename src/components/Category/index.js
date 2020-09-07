import React from 'react'
import { Anchor, Image } from './styles'


export const Category = ({name, cover, path, emoji = '?'}) => (
  <Anchor href={path}>
    <Image src={cover} alt={name}/>
    {emoji}
  </Anchor>
) 
