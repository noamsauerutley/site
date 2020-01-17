import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteDescription }) => (
  <header
    style={{
      background: `transparent`,
      marginBottom: `.85 rem`,
    }}
  >
    <div
      style={{
        clear: `both`,
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <h1 >
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            textAlign: `center`
          }}
        >
          {siteTitle}  
        </Link>
      </h1>
      <h4 style={{marginTop: "18px", marginLeft: "5px"}}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            textAlign: `center`,
            
          }}
        >
          {siteDescription}
        </Link>
      </h4>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
