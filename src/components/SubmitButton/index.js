import React from 'react'
import { Button } from './style'
import PropTypes from 'prop-types'

export const SubmitButton = ({ children, onClick, disabled }) => (
  <Button disabled={disabled} onClick={onClick}> {children} </Button>
)

SubmitButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired
}
