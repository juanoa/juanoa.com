import React from 'react'

export const DropdownItem = ({link}) => {
  return (
    <li>
      <a className="dropdown-item" href={link.url}>
        {
          link.icon && <img src={link.icon} className="mr-2" height={12} alt={link.name} />
        }
        {link.name}
      </a>
    </li>
  )
}