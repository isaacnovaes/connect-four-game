import { configureStore } from '@reduxjs/toolkit';
import boardReducer, { playCpu } from '../features/game/boardSlice';
import resizeReducer from '../features/game/resizeSlice';

export const store = configureStore({
    reducer: { board: boardReducer, resize: resizeReducer },
});

store.subscribe(() => {
    const {
        board: { isCpuMode, playerTurn, timeLeft },
    } = store.getState();
    if (isCpuMode && playerTurn === 2 && timeLeft === 29) {
        setTimeout(() => {
            store.dispatch(playCpu());
        }, 1500);
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
