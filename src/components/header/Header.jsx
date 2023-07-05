import React from 'react'
import Nav from './Nav'
import Classes from "./Header.module.css"

function Header() {
  return (
    <header className={Classes.header}>
      <h1 className={Classes.logo}>AARONZ-WAY</h1>
      <Nav />
    </header>
  )
}

export default Header