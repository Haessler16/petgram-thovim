import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Title, Div } from './style'

export const Layout = ({ children, title, subtitle }) => {
  return (
    <Fragment>
      <Helmet>
        {title && <title>{title}-Petgram</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <Div>
        {title && <Title>{title}</Title>}
        {children}
      </Div>
    </Fragment>
  )
}
