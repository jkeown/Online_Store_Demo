import React from "react"

function Nav() {
  return (
    <ul className="flex justify-between">
      {/* <li>Store</li>
      <li>Contact</li> */}
      <span class="snipcart-items-count bg-yellow-500 px-2 mr-1 rounded-full"></span>
      <li class="snipcart-checkout cursor-pointer">Cart</li>
    </ul>
  )
}

export default Nav
