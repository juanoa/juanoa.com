import React from 'react'
import {Link} from "gatsby";

export const LanguageSelect = ({i18n}) => {

  const {actual, languages} = i18n

  return (
    <>
      {
        languages &&
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
              {actual.toUpperCase()}
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              {
                languages.filter(l => l.lang !== actual).map(dest => (
                  <Link className="dropdown-item" key={dest.lang} to={dest.url}>
                    {dest.lang.toUpperCase()}
                  </Link>
                ))
              }
            </div>
          </li>
        </ul>
      }
    </>
  )
}