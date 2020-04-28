import React from 'react'
import {Link} from 'gatsby'
import Layout from "../components/Layout"

export const blog = () => {
    return (
        <Layout>
            Hello from the Blog page...<Link to="/">Back Home</Link>
        </Layout>
    )
}

export default blog
