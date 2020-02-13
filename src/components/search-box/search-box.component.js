import React from 'react';
import './search-box.styles.css'

export const SearchBox = ( { placeHolder, changeHandler} ) => (
    <input 
        className='search'
        type='search' 
        placeholder={placeHolder} 
        onChange={changeHandler}
    />

);
