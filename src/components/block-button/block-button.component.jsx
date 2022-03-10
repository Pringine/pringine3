import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const BlockButton = ({text, url, onClick, id}) => {
  return (
    <div className="d-grid mt-4">
      <Button as={Link} to={id?`/${url}/${id}`:`/${url}`} variant="dark" size="md" onClick={onClick}>{text}</Button>
    </div>
  )
}
