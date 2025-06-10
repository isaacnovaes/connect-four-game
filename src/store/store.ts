import { configureStore } from '@reduxjs/toolkit';
import boardReducer from '../features/game/boardSlice';
import routerSlice from './routeSlice';

export const store = configureStore({
    reducer: { board: boardReducer, router: routerSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
