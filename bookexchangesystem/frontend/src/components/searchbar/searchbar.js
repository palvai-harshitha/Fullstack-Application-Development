import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './searchbar.css';

function SearchBar() {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault(); // Prevent form submission default behavior
        if (searchValue.trim()) {
            navigate(`/viewbooks?search=${encodeURIComponent(searchValue)}`);
        }
    };

    return (
        <div className="search-wrapper">
            <FontAwesomeIcon icon={faSearch} className="search-icon" aria-hidden="true" />
            <form className="search-container" onSubmit={handleSearch}>
                <input
                    name="search"
                    placeholder="Search for a book"
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </form>
        </div>
    );
}

export default SearchBar;
