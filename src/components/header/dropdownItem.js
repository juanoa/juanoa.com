import React from 'react'
import {Link} from "gatsby";

export const DropdownItem = ({link}) => {
    return (
        <li>
            {
                link.internal
                    ? (
                        <Link className="dropdown-item" to={link.url}>
                            {
                                link.icon && <img src={link.icon} className="mr-2" height={12} alt={link.name}/>
                            }
                            {link.name}
                        </Link>
                    )
                    : (
                        <a className="dropdown-item" href={link.url} target="_blank">
                            {
                                link.icon && <img src={link.icon} className="mr-2" height={12} alt={link.name}/>
                            }
                            {link.name}
                        </a>
                    )
            }

        </li>
    )
}