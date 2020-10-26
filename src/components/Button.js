import React from 'react'

function Button({ product }) {
    return (
        <button className="snipcart-add-item border-2 border-yellow-600 font-bold text-yellow-700 px-3 py-1 hover:bg-yellow-600 hover:bg-yellow-600 hover:text-black"
            data-item-id={product.node.contentfulid}
            data-item-price={product.node.price}
            data-item-url="/"
            data-item-name={product.node.name}>
            Add to Cart
        </button>
    )
}

export default Button