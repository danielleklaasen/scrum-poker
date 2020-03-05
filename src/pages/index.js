import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/background-image"

const IndexPage = () => (
  <Layout>
    <BackgroundSection/>
    <SEO title="Home" />
    <h1>Gravity</h1>
    <p>Scrum cards</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
