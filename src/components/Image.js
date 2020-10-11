import React from "react"

function Image({product}) {
  // console.log(props)
  return (
    <img
      className="object-cover text-lg h-64 w-full"
      src={product.node.image.resize.src}
      alt={product.node.name}
    />
  )
}

export default Image
