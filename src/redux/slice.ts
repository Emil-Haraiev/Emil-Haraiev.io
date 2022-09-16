import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from '../entities';
import { fetchPostsThunk, fetchUsersThunk } from './thunk';

const initialState: InitialState = {
    users: [],
    postsLoading: false,
    usersLoading: false,
    error: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchUsersThunk.pending, state => ({
            ...state,
            usersLoading: true,
        }));
        builder.addCase(fetchUsersThunk.fulfilled, (state, action) => ({
            ...state,
            users: action.payload,
            usersLoading: false,
        }));
        builder.addCase(fetchUsersThunk.rejected, (state, action) => ({
            ...state,
            usersLoading: false,
            // error: action.payload.error.message,
        }));
        builder.addCase(fetchPostsThunk.pending, state => ({
            ...state,
            postsLoading: true,
        }));
        builder.addCase(fetchPostsThunk.fulfilled, (state, action) => ({
            ...state,
            posts: action.payload,
            postsLoading: false,
        }));
        builder.addCase(fetchPostsThunk.rejected, state => ({
            ...state,
            postsLoading: false,
        }));
    },
});
