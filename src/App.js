import React, { Fragment, useContext } from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'

import { Router, Redirect } from '@reach/router'
import { Context } from './Context'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NavBar } from './components/Navbar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { NotFound } from './pages/NotFound'

// const UserLogged = ({children})=>{
//   return children({isAuth: false})
// }

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <Fragment>
      <GlobalStyles />
      <Logo />

      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisterUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>

      <NavBar />
    </Fragment>
  )
}
