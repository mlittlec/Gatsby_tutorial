import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const blog = () => {
  return (
    <Layout>
      Hello from the Blog page<Link to="/">back home</Link>
    </Layout>
  )
}

export default blog
