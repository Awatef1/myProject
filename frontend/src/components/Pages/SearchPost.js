import React, { useState } from 'react';
import { getPostsByFilter } from '../../JS/Actions/search';
import { useDispatch } from 'react-redux'

const SearchPost = () => {
    const [text, setText] = useState('');

    const dispatch = useDispatch()

    const handleSearch = e => {

		setText(e.target.value);

		dispatch(getPostsByFilter({ title: 'text', query: e.target.value }));
	};
    return (
        <div>
 <h1 style={{marginBottom:'20px'}}>M App</h1>

     <input
		className='form-control mr-sm-2'
		type='search'
		placeholder='Search'
		aria-label='Search'
		name='search'
		value={text}
		onChange={handleSearch}
	/>
 
 
        </div>
    )
}

export default SearchPost;