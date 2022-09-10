import React from 'react';
import Filter from '../filter/Filter';
import Search from '../search/Search';
import './app.scss';
import UserCard from '../userCard/UserCard';
import Arrow from '../arrow/Arrow';
import Posts from '../posts/Posts';
const App = () => {
    return (
        <>
            {/*<div className="header">*/}
            {/*    <Filter />*/}
            {/*    <Search />*/}
            {/*</div>*/}
            {/*<UserCard />*/}
            {/*<Arrow />*/}
            <Posts />
        </>
    );
};

export default App;
