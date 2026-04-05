import React from 'react'

const PageLayout = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
      <p>{props.children}</p>
      <footer>{props.footer}</footer>
    </div>
  )
}

export default PageLayout
