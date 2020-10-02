import React from "react"
import Image from "./Image"
import Button from "./Button"

function Product(props) {
  return (
    <div style={{"min-width": 275}} className="w-11/12 md:w-5/12 lg:w-2/12 bg-blue-400 p-4 mb-4 text-blue-800">
      <div>
        <Image product={props} />
      </div>
      <div className="flex justify-between leading-loose">
        <h2 className="font-bold text-blue-900">{props.product.node.name}</h2>
        <span className="font-bold text-yellow-700">
          {props.product.node.price}
        </span>
      </div>
      <div style={{'min-height': 50}}>
        <p className="text-blue-100 text-lg">
          {props.product.node.description}
        </p>
      </div>
      <div className="text-center pt-4">
        <Button product={props} />
      </div>
    </div>
  )
}

export default Product
