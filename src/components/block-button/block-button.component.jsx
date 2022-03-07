import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const BlockButton = ({text, url}) => {
  return (
    <div className="d-grid mt-4">
      <Button as={Link} to={`/${url}`} variant="dark" size="md">{text}</Button>
    </div>
  )
}
