import React, { Component } from "react"
import Layout from "../components/Layout"
import Button from '../examples/Button'
export default class tours extends Component {
  render() {
    return <Layout>Hello from the Tours page
      <div>
        <Button big>First Button</Button>
        <Button color="yellow">Second Button</Button>
      </div>
      
    </Layout>
  }
}
