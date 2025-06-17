import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getAvailableRow, getBestCpuMove } from './cpu-helper';
import { checkWinner } from './helpers';

export type GridItem = 0 | 1 | 2;
export type Player = 1 | 2;
export type Column = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type Row = 0 | 1 | 2 | 3 | 4 | 5;
export type Run = { row: Row; column: Column; player: Player; winnerRun: boolean };

export interface BoardState {
    grid: [
        [GridItem, GridItem, GridItem, GridItem, GridItem, GridItem, GridItem],
        [GridItem, GridItem, GridItem, GridItem, GridItem, GridItem, GridItem],
        [GridItem, GridItem, GridItem, GridItem, GridItem, GridItem, GridItem],
        [GridItem, GridItem, GridItem, GridItem, GridItem, GridItem, GridItem],
        [GridItem, GridItem, GridItem, GridItem, GridItem, GridItem, GridItem],
        [GridItem, GridItem, GridItem, GridItem, GridItem, GridItem, GridItem],
    ];
    runs: Run[];
    playerTurn: Player;
    winnerPlayer: null | Player;
    timeLeft: number;
    isCpuMode: boolean;
    state: 'idle' | 'paused' | 'done';
}

const initialState: BoardState = {
    grid: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ],
    runs: [],
    playerTurn: 1,
    winnerPlayer: null,
    timeLeft: 30,
    state: 'idle',
    isCpuMode: false,
};

export const counterSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        play: (state, { payload }: PayloadAction<{ row: Row; column: Column }>) => {
            for (let row = 5; row >= 0; row--) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
                const rowIndex = row as Row;
                if (state.grid[rowIndex][payload.column] === 0) {
                    state.grid[rowIndex][payload.column] = state.playerTurn;
                    state.runs.push({
                        column: payload.column,
                        row: rowIndex,
                        player: state.playerTurn,
                        winnerRun: false,
                    });

                    const gridResult = checkWinner({
                        grid: state.grid,
                        rowIndex,
                        columnIndex: payload.column,
                        player: state.playerTurn,
                    });

                    if (gridResult.winner) {
                        state.winnerPlayer = state.playerTurn;
                        state.runs = state.runs.map((run) => {
                            const runsFilterRow = gridResult.runs.filter((r) => r.row === run.row);
                            const runsFilterColumn = runsFilterRow.filter(
                                (r) => r.column === run.column
                            );

                            if (runsFilterColumn.length) {
                                run.winnerRun = true;
                                return run;
                            }
                            return run;
                        });

                        state.state = 'done';
                        break;
                    }

                    state.timeLeft = initialState.timeLeft;
                    state.playerTurn = state.playerTurn === 1 ? 2 : 1;
                    break;
                }
            }
        },
        playCpu: (state) => {
            const cpuColumn = getBestCpuMove(state.grid, 2);
            const cpuRow = getAvailableRow(state.grid, cpuColumn);
            if (cpuRow) {
                state.grid[cpuRow][cpuColumn] = state.playerTurn;
                state.runs.push({
                    column: cpuColumn,
                    row: cpuRow,
                    player: state.playerTurn,
                    winnerRun: false,
                });
                const gridResultCpuMove = checkWinner({
                    grid: state.grid,
                    rowIndex: cpuRow,
                    columnIndex: cpuColumn,
                    player: state.playerTurn,
                });
                if (gridResultCpuMove.winner) {
                    state.winnerPlayer = state.playerTurn;
                    state.runs = state.runs.map((run) => {
                        const runsFilterRow = gridResultCpuMove.runs.filter(
                            (r) => r.row === run.row
                        );
                        const runsFilterColumn = runsFilterRow.filter(
                            (r) => r.column === run.column
                        );

                        if (runsFilterColumn.length) {
                            run.winnerRun = true;
                            return run;
                        }
                        return run;
                    });
                    state.state = 'done';
                    state.winnerPlayer = 2;
                    state.timeLeft = initialState.timeLeft;
                } else {
                    state.timeLeft = initialState.timeLeft;
                    state.playerTurn = 1;
                }
            }
        },
        restart: (state) => {
            state.grid = initialState.grid;
            state.runs = initialState.runs;
            state.playerTurn = initialState.playerTurn;
            state.winnerPlayer = initialState.winnerPlayer;
            state.timeLeft = initialState.timeLeft;
            state.state = initialState.state;
        },
        setPlayerTurn: (state, { payload: playerTurn }: PayloadAction<Player>) => {
            state.playerTurn = playerTurn;
            state.timeLeft = initialState.timeLeft;
        },
        setCpuMode: (state, { payload: cpuMode }: PayloadAction<boolean>) => {
            state.isCpuMode = cpuMode;
        },
        decreaseTimer: (s) => {
            s.timeLeft = s.timeLeft >= 0 ? s.timeLeft - 1 : 0;
        },
        setGameStatus: (s, { payload }: PayloadAction<BoardState['state']>) => {
            s.state = payload;
        },
    },
});

export const { play, restart, setPlayerTurn, decreaseTimer, setGameStatus, playCpu, setCpuMode } =
    counterSlice.actions;

export default counterSlice.reducer;
