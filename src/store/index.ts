import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from '../redux/slice';

export const store = configureStore({
    reducer: userSlice.reducer,
    devTools: true,
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
