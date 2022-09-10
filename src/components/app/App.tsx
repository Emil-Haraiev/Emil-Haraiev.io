import React, { useEffect, useState } from 'react';
import Filter from '../filter/Filter';
import Search from '../search/Search';
import './app.scss';
import UsersCard from '../userCard/UsersCard';
import Arrow from '../arrow/Arrow';
import UserPosts from '../posts/Posts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsThunk, fetchUsersThunk } from '../../redux/thunk';
import { RootState } from '../../store';
import { InitialState } from '../../entities';
const App = () => {
    const [page, setPage] = useState(1);
    const [inProp, setInProp] = useState(false);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const users = useSelector<any, any>(state => state.users);
    const posts = useSelector<any, any>(state => state.posts);
    useEffect(() => {
        dispatch(fetchUsersThunk(page));
    }, []);
    return (
        <>
            <div className="header">
                <Filter />
                <Search setValue={setValue} />
            </div>
            <div className="contentWrapper">
                <UsersCard value={value} setInProp={setInProp} users={users} />
                {posts && <UserPosts inProp={inProp} posts={posts} />}
            </div>
            <Arrow page={page} setPage={setPage} />
        </>
    );
};

export default App;
