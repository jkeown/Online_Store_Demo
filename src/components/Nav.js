import React from "react"

function Nav() {
  return (
    <ul className="flex">
      {/* <li>Store</li>
      <li>Contact</li> */}
      <li class="snipcart-items-count bg-yellow-500 px-2 mr-1 rounded-full">0</li>
      <li class="snipcart-checkout cursor-pointer">Cart</li>
    </ul>
  )
}

export default Nav
