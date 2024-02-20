import React from 'react'

const Footer = ({length}) => {
  const today = new Date();

  return (
    <footer>
      <p>{length} item{length === 1 ? "" : "s"}</p>
    </footer>
  )
}

export default Footer