import React from "react"
import Logo from "./Logo"
import Nav from "./Nav"

function Header() {
  return (
    <header className="flex justify-center p-4 bg-blue-600 text-white fixed w-full">
      <div className="header-container flex justify-between w-full md:w-8/12 lg:w-6/12">
        <Logo />
        <Nav />
      </div>
    </header>
  )
}

export default Header
