import React, { useEffect } from 'react';
import './userCard.scss';
import { useDispatch } from 'react-redux';
import { fetchUsersThunk } from '../../redux/thunk';
import type {} from 'redux-thunk/extend-redux';

const UserCard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersThunk());
    }, []);
    return (
        <div className="userCar-wrapper">
            <div className="userCard">
                <div className="userCard_info">
                    <div className="userCard_info-name">Name</div>
                    <div className="userCard_info-email">Email</div>
                    <div className="userCard_info-number">Number</div>
                    <div className="userCard_info-site">Site</div>
                </div>
                <button className="userCard_button">More posts</button>
            </div>
            <div className="userCard">
                <div className="userCard_info">
                    <div className="userCard_info-name">Name</div>
                    <div className="userCard_info-email">Email</div>
                    <div className="userCard_info-number">Number</div>
                    <div className="userCard_info-site">Site</div>
                </div>
                <button className="userCard_button">More posts</button>
            </div>
            <div className="userCard">
                <div className="userCard_info">
                    <div className="userCard_info-name">Name</div>
                    <div className="userCard_info-email">Email</div>
                    <div className="userCard_info-number">Number</div>
                    <div className="userCard_info-site">Site</div>
                </div>
                <button className="userCard_button">More posts</button>
            </div>
            <div className="userCard">
                <div className="userCard_info">
                    <div className="userCard_info-name">Name</div>
                    <div className="userCard_info-email">Email</div>
                    <div className="userCard_info-number">Number</div>
                    <div className="userCard_info-site">Site</div>
                </div>
                <button className="userCard_button">More posts</button>
            </div>
        </div>
    );
};

export default UserCard;
