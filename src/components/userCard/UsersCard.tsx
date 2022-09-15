import React, { useEffect, useState } from 'react';
import './userCard.scss';
import { useDispatch } from 'react-redux';
import { fetchPostsThunk } from '../../redux/thunk';
import type {} from 'redux-thunk/extend-redux';
import { User } from '../../entities';

interface Props {
    users: User[];
    setInProp: Function;
    value: string;
    page: number;
    sortUsers: User[];
}

const UsersCard: React.FC<Props> = ({
    users,
    setInProp,
    value,
    page,
    sortUsers,
}) => {
    const dispatch = useDispatch();
    const handleRequestPost = (id: number) => {
        setInProp(true);
        dispatch(fetchPostsThunk(id));
    };

    const filteredUsers = sortUsers.filter(user => {
        return user.name.toLowerCase().includes(value.toLowerCase());
    });

    const slice =
        page === 1
            ? filteredUsers.slice(0, 4)
            : page === 2
            ? filteredUsers.slice(4, 8)
            : page === 3
            ? filteredUsers.slice(8, 10)
            : users;
    return (
        <div className="userCar-wrapper">
            {slice.map((user, i) => (
                <div className="userCard" key={i}>
                    <div className="userCard_info">
                        <div className="userCard_info-name">{user.name}</div>
                        <div className="userCard_info-email">{user.email}</div>
                        <div className="userCard_info-number">{user.phone}</div>
                        <div className="userCard_info-site">{user.website}</div>
                    </div>
                    <button
                        className="userCard_button"
                        onClick={() => handleRequestPost(user.id)}
                    >
                        More posts
                    </button>
                </div>
            ))}
        </div>
    );
};

export default UsersCard;
