import React from 'react'
import {Link} from "gatsby";
import {DropdownItem} from "./dropdownItem";

export const NavLink = ({link}) => {
  if (link.subLinks) {
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
           aria-expanded="false">
          {link.name}
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          {
            link.subLinks.map((link, index) => (
              <DropdownItem link={link} key={index} />
            ))
          }
        </ul>
      </li>
    )
  } else {
    return (
      <li className="nav-item">
        <Link className="nav-link" activeClassName="header__nav-link-active" to={link.url}>
          {link.name}
        </Link>
      </li>
    )
  }

}