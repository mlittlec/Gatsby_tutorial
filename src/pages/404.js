import React from "react"
import Layout from "../components/Layout"
import styles from '../css/error.module.css'
import {Link} from 'gatsby'
import Banner from '../components/Banner'

export default function error() {
  return <Layout>
      <header className={styles.error}>
        <Banner title="Oops I've f*%ked up...(Error page)">
          <Link to='/' className="btn-white">Return to Home page</Link>
        </Banner>
      </header>
    </Layout>
}
