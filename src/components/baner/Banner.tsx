import React from 'react';
import './banner.scss';

const Banner = () => {
    return (
        <div className="bannerWrapper">
            <p>Users matching these filters were not found, please try again</p>
            <button className="backButton">Back to all users</button>
        </div>
    );
};

export default Banner;
