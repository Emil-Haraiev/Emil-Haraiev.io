import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, Posts } from '../entities';
import posts from '../components/posts/Posts';

export const fetchUsersThunk = createAsyncThunk<User[], number, any>(
    'users/fetchUsers',
    async page => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users?q=${4}`,
            );
            const data = await response.json();

            return data.slice(0, 4);
        } catch (e) {
            return e;
        }
    },
);

export const fetchPostsThunk = createAsyncThunk<Posts[], number, any>(
    'posts/fetchPosts',
    async id => {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts',
            );

            const data = await response.json();

            return data.filter((item: Posts) => item.userId === id);
        } catch (e) {
            return e;
        }
    },
);
