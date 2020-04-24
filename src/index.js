import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import Context from './Context'

const client = new ApolloClient({
  uri: 'http://localhost:3500/graphql'
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
  , document.getElementById('app'))
