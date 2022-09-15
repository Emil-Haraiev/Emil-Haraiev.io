import React from 'react';
import './arrow.scss';

interface Props {
    page: number;
    setPage: Function;
}

const Arrow: React.FC<Props> = ({ page, setPage }) => {
    const handleChangePage = (currentPage: number) => {
        if (currentPage >= 1 && currentPage <= 3) {
            setPage(currentPage);
        }
    };

    return (
        <div className="arrowWrapper">
            <div
                onClick={() => handleChangePage(page - 1)}
                className="arrowWrapper-item"
            >
                <img
                    src={require('../../assets/left.svg').default}
                    alt="left"
                />
                <div>Previous</div>
            </div>
            <div
                onClick={() => handleChangePage(page + 1)}
                className="arrowWrapper-item"
            >
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
