import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import '../styles/SearchBar.css'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

function SearchBar() {
  return (
    <TextField
      id="searchbar"
      className='searchbar'
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon className="search-icon"/>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default SearchBar