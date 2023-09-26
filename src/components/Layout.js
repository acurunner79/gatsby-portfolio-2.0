import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from './Nav/Header'


const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    width: 100vw;
    height: 100vh;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
}
`

const Layout = ({children}) => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <section>{children}</section>
    </div>
  )
}

export default Layout
