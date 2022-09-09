import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../entities';

export const fetchUsersThunk = createAsyncThunk<User[], void, any>(
    'users/fetchUsers',
    async () => {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/users',
            );
            const data = await response.json();

            return data;
        } catch (e) {
            return e;
        }
    },
);
