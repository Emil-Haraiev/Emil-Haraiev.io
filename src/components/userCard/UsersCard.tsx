import React, { useEffect, useState } from 'react';
import './userCard.scss';
import { useDispatch } from 'react-redux';
import { fetchPostsThunk, fetchUsersThunk } from '../../redux/thunk';
import type {} from 'redux-thunk/extend-redux';
import { User } from '../../entities';
interface Props {
    users: User[];
    setInProp: Function;
    value: string;
}
const UsersCard: React.FC<Props> = ({ users, setInProp, value }) => {
    const dispatch = useDispatch();

    const handleRequestPost = (id: number) => {
        setInProp(true);
        dispatch(fetchPostsThunk(id));
    };
    const filteredUsers = users.filter(user => {
        return user.name.toLowerCase().includes(value.toLowerCase());
    });
    return (
        <div className="userCar-wrapper">
            {filteredUsers.map(user => (
                <div className="userCard">
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
