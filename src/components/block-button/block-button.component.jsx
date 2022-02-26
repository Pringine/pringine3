import React from 'react'
import { Button } from 'react-bootstrap'

export const BlockButton = ({text}) => {
  return (
    <div className="d-grid mt-4">
      <Button variant="dark" size="md">{text}</Button>
    </div>
  )
}
