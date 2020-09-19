import React, { Fragment } from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm/index'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <Fragment>
            <UserForm onSubmit={activateAuth} title={'Registrarse'} />
            <UserForm onSubmit={activateAuth} title={'Iniciar Sesión'} />
          </Fragment>
        )
      }
    }
  </Context.Consumer>
)
