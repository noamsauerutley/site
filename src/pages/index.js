import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Github from '../components/github'
import LinkedIn from '../components/linkedin'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
   
    <div style={{ maxWidth: `80vw`, margin: "0 auto", marginTop: "20vh", marginBottom: "50px"}}>
      <Image/>
    </div>
    <div style={{textAlign: "center", display: "flex", flexBasis: "row", justifyContent: "space-around"}}>
      {/* <a style={{marginTop: "50px", marginRight: "50px"}} href="https://github.com/noamsauerutley"><Github /></a>       */}
      <a style={{marginTop: "50px", marginLeft: "50px"}} href="https://www.linkedin.com/in/noamsauerutley/"><LinkedIn /></a>
    </div>
  </Layout>
)

export default IndexPage
