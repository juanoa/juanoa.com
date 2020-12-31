import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {FaBars} from 'react-icons/fa'

import './nav.css'

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fff`,
      marginBottom: `1.45rem`,
      boxShadow: `0px 0px 6px 0px rgba(0,0,0,0.5)`,
    }}
  >
    <div className="topnav" id="myTopnav">
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
            height: 40,
          }}
          alt={"Juan Otálora"}/>
      </Link>
      <Link to={"https://cv.juanoa.com"} alt={"Sobre mi"}>Sobre mi</Link>
      <Link to={"https://cv.juanoa.com"} alt={"Sobre mi"}>Sobre mi</Link>
      <Link to={"https://cv.juanoa.com"} alt={"Sobre mi"}>Sobre mi</Link>
      <a href="javascript:void(0);" className="icon" onClick={myFunction}>
        <FaBars />
      </a>
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
