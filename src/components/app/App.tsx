import React from 'react';
import Filter from '../filter/Filter';
import Search from '../search/Search';
import './app.scss';
import UserCard from '../userCard/UserCard';
import Arrow from '../arrow/Arrow';
const App = () => {
    return (
        <>
            <div className="header">
                <Filter />
                <Search />
            </div>
            <UserCard />
            <Arrow />
        </>
    );
};

export default App;
