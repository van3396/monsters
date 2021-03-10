import React from 'react'
import "../css-components/searchBox.css";

export const SearchBox = ({placeholder, handleChange}) => {
    return (
        <input
        className='search'
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    )
}

