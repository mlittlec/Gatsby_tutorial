import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
// import { FaAdobe } from "react-icons/fa"
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'

export default () => (
  <Layout>
    <SimpleHero>
      < Banner title = "Continue Exploring"
      info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officius." >
        <Link to="/tours" className="btn-white">
          Explore Tours
        </Link>
        
      </Banner>
    </SimpleHero>
  </Layout>
)
