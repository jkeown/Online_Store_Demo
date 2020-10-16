import React from "react"
import cart from "../images/icons/shopping-cart.svg"

function Nav() {
  return (
    <ul className="flex items-center">
      {/* <li>Store</li>
      <li>Contact</li> */}
      <li class="snipcart-items-count text-yellow-500 font-bold mr-1"></li>
      <li class="snipcart-checkout cursor-pointer">
        <img src={cart} alt="shopping cart" />
      </li>
    </ul>
  )
}

export default Nav
