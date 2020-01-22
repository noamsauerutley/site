import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Github from '../components/github'
import LinkedIn from '../components/linkedin'
import Medium from '../components/medium'
import Email from '../components/email'
import Twitter from '../components/twitter'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
   
    {/* <div style={{ maxHeight: `1vh`, margin: "0 auto"}}>
      <Image />
    </div> */}
    <div style={{ margin: `0 auto`, marginTop: "10vh", maxHeight: `60vw`, textAlign: "center", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
      <a style={{marginTop: "27vh"}} href="https://github.com/noamsauerutley"><Github /></a> 
      <a href="https://www.linkedin.com/in/noamsauerutley/"><LinkedIn /></a>
      <a style={{marginTop: "19vh"}} href="https://twitter.com/thevoidbutcozy"><Twitter /></a> 
      <a style={{marginTop: "38vh"}} href="https://medium.com/@noamsauerutley"><Medium /></a> 
      <Link style={{marginTop: "12vh"}} to="/contact"><Email /></Link> 

    </div>
  </Layout>
)

export default IndexPage
