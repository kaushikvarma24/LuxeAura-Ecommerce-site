import React, { useState, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';

const SearchBar = () => {

    const { search, setSearch, showsearch, setShowSearch } = useContext(ShopContext) || {};
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [location]);

return showsearch && visible ? (
        <div className='border-t border-b bg-gray-50 text-center'>
            <div className='inline-flex justify-center items-center border border-gray-400 py-2 px-5 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                <input
                    type="text"
                    placeholder='Search'
                    className='flex-1 outline-none bg-inherit text-sm'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <img src={assets.search_icon} alt="search" className='w-5 h-5' />
            </div>
            <img
                onClick={() => setShowSearch(false)}
                src={assets.cross_icon}
                alt="close"
                className='inline w-3 cursor-pointer'
            />
        </div>
) : null;
}

export default SearchBar