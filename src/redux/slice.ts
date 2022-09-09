import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from '../entities';
import { fetchUsersThunk} from './thunk';
const initialState: InitialState = {
    users: [],
    usersLoading: false,
    error: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchUsersThunk.pending, (state: InitialState) => ({
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
        }))
    },
});
