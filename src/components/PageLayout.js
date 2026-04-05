import React from 'react'

const PageLayout = (props) => {
  return (
    <>
      <h1>{props.header}</h1>
      <p>{props.children}</p>
      <footer>{props.footer}</footer>
    </>
  )
}

export default PageLayout
