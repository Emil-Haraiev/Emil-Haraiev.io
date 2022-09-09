import React from 'react';
import './arrow.scss';
const Arrow = () => {
    return (
        <div className="arrowWrapper">
            <div className="arrowWrapper-item">
                <img
                    src={require('../../assets/left.svg').default}
                    alt="left"
                />
                <div>Previous</div>
            </div>
            <div className="arrowWrapper-item">
                <div>Next</div>
                <img
                    src={require('../../assets/right.svg').default}
                    alt="right"
                />
            </div>
        </div>
    );
};

export default Arrow;
