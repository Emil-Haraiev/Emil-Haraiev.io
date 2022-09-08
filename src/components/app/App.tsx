import React from 'react';
import Filter from '../filter/Filter';
import Search from '../search/Search';
import './app.scss';
import UserCard from '../userCard/UserCard';
const App = () => {
    return (
        <>
            <div className="header">
                <Filter />
                <Search />
            </div>
            <UserCard />
        </>
    );
};

export default App;
