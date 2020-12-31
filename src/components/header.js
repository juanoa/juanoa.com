import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fff`,
      marginBottom: `1.45rem`,
      boxShadow: `0px 0px 6px 0px rgba(0,0,0,0.5)`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `0.85rem 0.85rem`,
        maxWidth: 960,
      }}
    >
      <Link
        to="/"
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        <img
          src={"https://juanoa.com/wp-content/uploads/2020/10/juanoa-logo-min.png.webp"}
          style={{
            height: 44,
          }}
        />
      </Link>
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
