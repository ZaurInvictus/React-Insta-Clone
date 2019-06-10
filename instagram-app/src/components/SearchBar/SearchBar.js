import React from 'react';
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <div className='logo'>
        <i class="fab fa-instagram"></i>
        <hr/>
        <p>Instagram</p>
      </div>
      <div className='search-box'>
        <i class="fas fa-search"></i>
        <input placeholder='Search'/>
      </div>
      <div className='search-bar-icons'>
        <i class="far fa-compass"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-user"></i>
      </div>
    </div>
  )
}

export default SearchBar;