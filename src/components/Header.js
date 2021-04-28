import React, {useEffect, useState} from 'react';
import { useDebounce } from 'use-debounce';

const Header = ({ handleSearch, handleFilter}) => {
    const [search, setSearch] = useState('');
    const [filterData, setFilterData] = useState('');
    const [debouncedSearch] = useDebounce(search, 500)
    useEffect(() => {
        handleSearch(debouncedSearch)
    }, [debouncedSearch])

    useEffect(() => {
        handleFilter(filterData)
    }, [filterData])

    const handleFilterChange = (e) => {
        setFilterData(e.target.value)
    }

    const handleSearchChange = (e) => {
        const searchInput = document.getElementById('search-input');
        searchInput.removeEventListener('input', function() {
            if (!this.value) {
                window.location.reload()
            }
        });
        setSearch(e.target.value)
        searchInput.addEventListener('input', function() {
            if (!this.value) {
                window.location.reload()
            }
        });
    }

    return (
        <div className='header-wrapper'>
             <div className="select-wrapper">
                <select onChange={(e) => handleFilterChange(e)}>
                    <option defaultValue>Filter by</option>
                    <option value='Academic'> Group-Academic</option>
                    <option value='Financial Literacy'> Group-Financial Literacy</option>
                    <option value='Key Stage 1'>Level-Key Stage 1</option>
                    <option value='Key Stage 2'>Level-Key Stage 2</option>
                </select>
            </div>
            <div className="input-wrapper">
                <input id="search-input" type='text' value={search} onChange={handleSearchChange}/>
            </div>
        </div>
    )
}

export default Header