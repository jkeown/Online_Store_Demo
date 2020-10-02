import React from "react"
import Logo from "./Logo"
import Nav from "./Nav"

function Header() {
  return (
    <header className="flex justify-between p-4 bg-blue-600 text-white fixed w-full">
      <Logo />
      <Nav />
      <span class="snipcart-items-count"></span>
    </header>
  )
}

export default Header
