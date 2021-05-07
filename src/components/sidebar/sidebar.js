import React from 'react'
import './sidebar.css'
import SearchIcon from '@material-ui/icons/Search'

const sidebar = () => {
  return (
    <div className="sidebar">
      <div className="search">
        <input type="text" placeholder="Search" />
        <SearchIcon />
      </div>
    </div>
  )
}

export default sidebar
