import React from 'react'

function Button({product}){
    return(
        <button className="snipcart-add-item bg-yellow-300 border-2 border-blue-800 font-bold text-blue-800 px-3 py-1 hover:bg-blue-800 hover:text-yellow-300 hover:border-yellow-300"
        data-item-id={product.node.contentfulid}
        data-item-price={product.node.price}
        data-item-url="https://onlinestoredemo.netlify.app/"
        data-item-name={product.node.name}>
        Add to Cart
        </button>
    )
}

export default Button