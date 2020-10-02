import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Product from "../components/Product"
import { useStaticQuery, graphql } from "gatsby"

function Home() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProduct {
        edges {
          node {
            price
            name
            image {
              file {
                fileName
                url
              }
            }
            category
            description
            contentfulid
          }
        }
      }
    }
  `)

  const shirts = data.allContentfulProduct.edges
    .filter(edge => edge.node.category === "shirt")
    .map(edge => {
      return <Product product={edge} />
    })
  const hats = data.allContentfulProduct.edges
    .filter(edge => edge.node.category === "hat")
    .map(edge => {
      return <Product product={edge} />
    })
  const mugs = data.allContentfulProduct.edges
    .filter(edge => edge.node.category === "mug")
    .map(edge => {
      return <Product product={edge} />
    })
  const stickers = data.allContentfulProduct.edges
    .filter(edge => edge.node.category === "sticker")
    .map(edge => {
      return <Product product={edge} />
    })

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main class="mx-auto flex-grow mt-24 w-11/12 lg:w-9/12">
        <section>
          <div className="my-12">
            <h2 className="text-center text-5xl">Shirts</h2>
          </div>
          <div className="flex flex-wrap justify-evenly lg:justify-between">{shirts}</div>
        </section>
        <section>
          <div className="my-12">
            <h2 className="text-center text-5xl">Hats</h2>
          </div>
          <div className="flex flex-wrap justify-evenly lg:justify-between">{hats}</div>
        </section>
        <section>
          <div className="my-12">
            <h2 className="text-center text-5xl">Stickers</h2>
          </div>
          <div className="flex flex-wrap justify-evenly lg:justify-between">{stickers}</div>
        </section>
        <section>
          <div className="my-12">
            <h2 className="text-center text-5xl">Mugs</h2>
          </div>
          <div className="flex flex-wrap justify-evenly lg:justify-between">{mugs}</div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home