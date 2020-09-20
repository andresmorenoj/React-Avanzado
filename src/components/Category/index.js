import React from 'react'
import { Link, Image } from './styles'


export const Category = ({name, cover, path = '#', emoji = '?'}) => (
  <Link to={path}>
    <Image src={cover} alt={name}/>
    {emoji}
  </Link>
) 
