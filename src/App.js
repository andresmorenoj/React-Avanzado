import React from 'react'
import {Router} from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyles'
import {Logo} from './components/Logo'
import {Detail} from './pages/Detail'
import {Home} from './pages/Home'
import {NavBar} from './components/NavBar'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <div>
      <GlobalStyle/>
      <Logo/>
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <NavBar/>
    </div>
  )
}


