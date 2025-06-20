import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

const initialState = {
    width: 0,
};

export const resizeSlice = createSlice({
    name: 'resize',
    initialState,
    reducers: {
        setWidth: (state, { payload: newSize }: PayloadAction<number>) => {
            state.width = newSize;
        },
    },
});

const TABLET_BREAKPOINT = 768;

export const selectIsTabletBreakPoint = (state: RootState) =>
    state.resize.width >= TABLET_BREAKPOINT;

export const { setWidth } = resizeSlice.actions;

export default resizeSlice.reducer;
