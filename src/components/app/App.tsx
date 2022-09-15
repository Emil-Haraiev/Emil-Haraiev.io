import React, { useEffect, useState } from 'react';
import Filter from '../filter/Filter';
import Search from '../search/Search';
import './app.scss';
import UsersCard from '../userCard/UsersCard';
import Arrow from '../arrow/Arrow';
import UserPosts from '../posts/Posts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersThunk } from '../../redux/thunk';
import { User } from '../../entities';
import { store } from '../../store';

const App = () => {
    const [page, setPage] = useState(1);
    const [inProp, setInProp] = useState(false);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const users = useSelector<any, any>(state => state.users);
    const posts = useSelector<any, any>(state => state.posts);
    const [sortUsers, setSortUsers] = useState<User[]>(users);

    useEffect(() => {
        dispatch(fetchUsersThunk(page));
    }, []);
    useEffect(() => {
        if (users.length) {
            setSortUsers(users);
        }
    }, [users]);
    return (
        <>
            <div className="header">
                <Filter sortUsers={sortUsers} setSortUsers={setSortUsers} />
                <Search setValue={setValue} />
            </div>
            <div className="contentWrapper">
                <UsersCard
                    sortUsers={sortUsers}
                    value={value}
                    page={page}
                    setInProp={setInProp}
                    users={users}
                />

                {posts && <UserPosts inProp={inProp} posts={posts} />}
            </div>
            <Arrow page={page} setPage={setPage} />
        </>
    );
};

export default App;
