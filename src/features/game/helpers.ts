import type { BoardState, Column, Player, Row } from './boardSlice';

type WinnerRun = { row: number; column: number };

export const checkWinner = ({
    grid,
    rowIndex,
    columnIndex,
    player,
}: {
    grid: BoardState['grid'];
    rowIndex: Row;
    columnIndex: Column;
    player: Player;
}): { winner: false } | { winner: true; runs: [WinnerRun, WinnerRun, WinnerRun, WinnerRun] } => {
    // check horizontally
    const row = grid[rowIndex];
    for (let index = 0; index <= 3; index++) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
        const loopColumnIndex = index as Column;
        if (
            row[loopColumnIndex] === player &&
            row[loopColumnIndex + 1] === player &&
            row[loopColumnIndex + 2] === player &&
            row[loopColumnIndex + 3] === player
        ) {
            return {
                winner: true,
                runs: [
                    { row: rowIndex, column: loopColumnIndex },
                    { row: rowIndex, column: loopColumnIndex + 1 },
                    { row: rowIndex, column: loopColumnIndex + 2 },
                    { row: rowIndex, column: loopColumnIndex + 3 },
                ],
            };
        }
    }

    // check vertically
    for (let index = 0; index <= 2; index++) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
        const loopRowIndex = index as Row;
        if (
            grid[loopRowIndex][columnIndex] === player &&
            grid[loopRowIndex + 1][columnIndex] === player &&
            grid[loopRowIndex + 2][columnIndex] === player &&
            grid[loopRowIndex + 3][columnIndex] === player
        ) {
            return {
                winner: true,
                runs: [
                    {
                        row: loopRowIndex,
                        column: columnIndex,
                    },
                    {
                        row: loopRowIndex + 1,
                        column: columnIndex,
                    },
                    {
                        row: loopRowIndex + 2,
                        column: columnIndex,
                    },
                    {
                        row: loopRowIndex + 3,
                        column: columnIndex,
                    },
                ],
            };
        }
    }

    // check diagonal top-left to bottom-right
    for (let i = 0; i <= 2; i++) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
        const loopRowIndex = i as Row;
        for (let j = 0; j <= 3; j++) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
            const loopColumnIndex = j as Column;
            if (
                grid[loopRowIndex][loopColumnIndex] === player &&
                grid[loopRowIndex + 1][loopColumnIndex + 1] === player &&
                grid[loopRowIndex + 2][loopColumnIndex + 2] === player &&
                grid[loopRowIndex + 3][loopColumnIndex + 3] === player
            ) {
                return {
                    winner: true,
                    runs: [
                        {
                            row: loopRowIndex,
                            column: loopColumnIndex,
                        },
                        {
                            row: loopRowIndex + 1,
                            column: loopColumnIndex + 1,
                        },
                        {
                            row: loopRowIndex + 2,
                            column: loopColumnIndex + 2,
                        },
                        {
                            row: loopRowIndex + 3,
                            column: loopColumnIndex + 3,
                        },
                    ],
                };
            }
        }
    }

    // check diagonal top-right to bottom-left
    for (let i = 0; i <= 2; i++) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
        const loopRowIndex = i as Row;
        for (let j = 6; j >= 3; j--) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
            const loopColumnIndex = j as Column;
            if (
                grid[loopRowIndex][loopColumnIndex] === player &&
                grid[loopRowIndex + 1][loopColumnIndex - 1] === player &&
                grid[loopRowIndex + 2][loopColumnIndex - 2] === player &&
                grid[loopRowIndex + 3][loopColumnIndex - 3] === player
            ) {
                return {
                    winner: true,
                    runs: [
                        {
                            row: loopRowIndex,
                            column: loopColumnIndex,
                        },
                        {
                            row: loopRowIndex + 1,
                            column: loopColumnIndex - 1,
                        },
                        {
                            row: loopRowIndex + 2,
                            column: loopColumnIndex - 2,
                        },
                        {
                            row: loopRowIndex + 3,
                            column: loopColumnIndex - 3,
                        },
                    ],
                };
            }
        }
    }

    return { winner: false };
};

export const isGameTied = (grid: BoardState['grid']): boolean =>
    grid.every((row) => row.every((gridItem) => gridItem !== 0));
