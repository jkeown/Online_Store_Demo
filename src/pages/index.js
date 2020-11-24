import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Product from "../components/Product"
import Head from "../components/Head"
import { useStaticQuery, graphql } from "gatsby"

function Home() {
  const data = useStaticQuery(graphql`
   query {
    allContentfulProduct {
      edges {
        node {
          price
          name
          category
          description
          contentfulid
          image {
            resize(quality: 100) {
              src
            }
          }
        }
      }
    }
  }
  `)
  // get all categories
  let categories = data.allContentfulProduct.edges
    .map(edge => edge.node.category)

  categories = new Set(categories)

  // alphabetize categories
  categories = [...(new Set(categories))].sort()

  let mainContent = []

  // sort all products  by category to display
  for (let category of categories) {
    let products = data.allContentfulProduct.edges
      .filter(edge => edge.node.category === category)
      .map(edge => {
        return <Product product={edge} />
      })

    mainContent.push(
      <section>
        <div className="my-12">
          <h2 className="category text-center text-6xl capitalize relative">{
            !isNaN(category.charAt(0)) ? category.substr(1) : category
          }s</h2>
        </div>
        <div className="flex flex-wrap justify-evenly lg:justify-between">
          {products}
        </div>
      </section>
    )
  }


  return (
    <div className="min-h-screen flex flex-col">
      <Head />
      <Header />
      <main class="mx-auto flex-grow mt-12 w-11/12 lg:w-9/12">
        {mainContent}
      </main>
      <Footer />
    </div>
  )
}

export default Home
