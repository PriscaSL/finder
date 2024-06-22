import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import '../styles/SearchBar.css'
//import NavigateNextIcon from '@mui/icons-material/NavigateNext';
//import { Link } from 'react-router-dom';

function SearchBar() {
  return (
    <div className='search-input'>
      <SearchIcon className='search-icon'/>
      <input type="text" placeholder="Search" className="searchbar" />
    </div>
  )
}

export default SearchBar