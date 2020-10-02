import React from "react"

function Image(props) {
  console.log(props)
  return (
    <img
      className="object-cover h-64 w-full"
      src={props.product.product.node.image.file.url}
      alt={props.product.product.node.name}
    />
  )
}

export default Image