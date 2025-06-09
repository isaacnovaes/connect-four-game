import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type Router = 'menu' | 'game';
type State = { route: Router };

const initialState: State = { route: 'menu' };

const routeSlice = createSlice({
    name: 'router',
    initialState,
    reducers: {
        setRouter: (state, action: PayloadAction<Router>) => {
            state.route = action.payload;
        },
    },
});

export const { setRouter } = routeSlice.actions;

export default routeSlice.reducer;
