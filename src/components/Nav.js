import React from "react"

function Nav() {
  return (
    <ul className="flex">
      {/* <li>Store</li>
      <li>Contact</li> */}
      <li class="snipcart-items-count text-yellow-500 font-bold mr-1"></li>
      <li class="snipcart-checkout cursor-pointer">Cart</li>
    </ul>
  )
}

export default Nav
