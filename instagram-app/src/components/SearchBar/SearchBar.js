import React from 'react';
// import textLogo from '../../assets/textlogo.png';
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <div className='logo'>
        <div className='logo-box'><i className="fab fa-instagram"></i></div>
        {/* <div className="text-logo-box">
         <img alt="instagram logo" src={textLogo} className="text-logo-image" />
        </div> */}
        <p className="logo-text">Instagram</p>
    
      </div>
      <div className='search-box'>
        <i className="fas fa-search"></i>
        <input className='search-input' placeholder='Search'/>
      </div>
      <div className='search-bar-icons'>
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
      </div>
    </div>
  )
}

export default SearchBar;