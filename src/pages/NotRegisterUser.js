import React, { Fragment, useState, useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisterUser = () => {
  const [registerError, setRegisterError] = useState('')
  const [loginError, setLoginError] = useState('')
  const { activateAuth } = useContext(Context)

  return (
    <Fragment>
      <RegisterMutation>
        {
          (register, { loading }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables })
                .then(({ data }) => {
                  const { signup } = data
                  activateAuth(signup)
                }).catch(error => setRegisterError(error.graphQLErrors[0].message))
            }

            return <UserForm error={registerError} disabled={loading} title='Register' onSubmit={onSubmit} />
          }
        }
      </RegisterMutation>
      <LoginMutation>
        {
          (login, { loading }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables })
                .then(({ data }) => {
                  const { login } = data
                  activateAuth(login)
                }).catch(error => setLoginError(error.graphQLErrors[0].message))
            }

            return <UserForm error={loginError} disabled={loading} title='Login' onSubmit={onSubmit} />
          }
        }
      </LoginMutation>
    </Fragment>
  )
}
