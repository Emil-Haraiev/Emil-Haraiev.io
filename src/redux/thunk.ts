import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, Posts } from '../entities';

export const fetchUsersThunk = createAsyncThunk<User[], void, any>(
    'users/fetchUsers',
    async () => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users?q=${4}`,
            );
            const data = await response.json();

            return data;
        } catch (e) {
            return e;
        }
    },
);

export const fetchPostsThunk = createAsyncThunk<Posts[], void, any>(
    'posts/fetchPosts',
    async () => {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts',
            );

            const data = await response.json();

            return data;
        } catch (e) {
            return e;
        }
    },
);
