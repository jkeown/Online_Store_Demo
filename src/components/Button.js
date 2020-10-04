import React from 'react'

function Button(props){
    return(
        <button className="snipcart-add-item bg-yellow-300 border-2 border-blue-800 font-bold text-blue-800 px-3 py-1"
        data-item-id={props.product.product.node.contentfulid}
        data-item-price={props.product.product.node.price}
        data-item-url="https://onlinestoredemo.netlify.app/"{props.product.product.node.name}
        data-item-name={props.product.product.node.name}>
        Add to Cart
        </button>
    )
}

export default Button