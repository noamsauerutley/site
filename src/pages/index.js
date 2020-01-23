import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Github from '../components/github'
import LinkedIn from '../components/linkedin'
import Medium from '../components/medium'
import Email from '../components/email'
import Twitter from '../components/twitter'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout >
    <SEO title="Home" />
    <div style={{ margin: `0 auto`, marginTop: "8vh", maxHeight: `60vh`, textAlign: "center", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
      <a className="with_effect" style={{marginTop: "37vh"}} href="https://github.com/noamsauerutley"><Github /></a> 
      <a className="with_effect" href="https://www.linkedin.com/in/noamsauerutley/"><LinkedIn /></a>
      <a className="with_effect" style={{marginTop: "25vh"}} href="https://twitter.com/thevoidbutcozy"><Twitter /></a> 
      <a className="with_effect" style={{marginTop: "48vh"}} href="https://medium.com/@noamsauerutley"><Medium /></a> 
      <Link className="with_effect" style={{marginTop: "10vh"}} to="/contact"><Email /></Link> 

    </div>
  </Layout>
)

export default IndexPage
