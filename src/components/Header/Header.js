import React, { useState } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import SearchIcon from '@material-ui/icons/Search'
import StorageIcon from '@material-ui/icons/Storage'
import './Header.css'

const Header = (props) => {
  const { cartItem } = props
  const [search, setSearch] = useState('')
  return (
    <div className="header">
      <div className="left-header">
        <StorageIcon />
      </div>
      <div className="center-header">
        <input
          type="text"
          name=""
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon />
      </div>
      <div className="right-header">
        <span>{cartItem}</span>
        <ShoppingCartIcon />
      </div>
    </div>
  )
}

export default Header
