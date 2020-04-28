import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/Layout"
export default () => (
    <Layout> 
        <h1>This is our Home Page</h1>
        Hello world! <Link to="/blog/">Blog page</Link>
        <h1 style={{fontSize: "20px", textTransform: "capitalize", color: "red"}}>Hello styling</h1>
    </Layout>
)