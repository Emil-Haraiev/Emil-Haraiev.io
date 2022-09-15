import React from 'react';
import './search.scss';

interface Props {
    setValue: Function;
}

const Search: React.FC<Props> = ({ setValue }) => {
    return (
        <>
            <input
                className="searchInput"
                placeholder="Search"
                onChange={event => setValue(event.target.value)}
            />
        </>
    );
};

export default Search;
