import React, { useState } from 'react';
import './filter.scss';
import { User } from '../../entities';

interface Props {
    setSortUsers: Function;
    sortUsers: User[];
}
const Filter: React.FC<Props> = ({ sortUsers, setSortUsers }) => {
    const compare = (a: User, b: User) => {
        const firstName = a.name.toLowerCase();
        const secondName = b.name.toLowerCase();
        return firstName < secondName ? -1 : firstName > secondName ? 1 : 0;
    };

    const handleFilterButton = () => {
        setSortUsers((prevState: any) => [...prevState].sort(compare));
        return sortUsers;
    };

    return (
        <>
            <button onClick={() => handleFilterButton()} className="filter">
                Filter by name
            </button>
        </>
    );
};

export default Filter;
