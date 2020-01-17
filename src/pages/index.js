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
   
    <div style={{ maxHeight: `10vh`, margin: "0 auto"}}>
      <Image />
    </div>
    <div style={{ margin: `0 auto`, marginTop: "10vh", maxWidth: `40vw`, textAlign: "center", display: "flex", flexBasis: "row", justifyContent: "space-around"}}>
      <a style={{marginTop: "15vh"}} href="https://github.com/noamsauerutley"><Github /></a> 
      <a href="https://www.linkedin.com/in/noamsauerutley/"><LinkedIn /></a>
    </div>
  </Layout>
)

export default IndexPage
