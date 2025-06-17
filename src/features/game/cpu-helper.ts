import type { BoardState, Column, GridItem, Player, Row } from './boardSlice';

type Grid = BoardState['grid'];

const MAX_DEPTH = 6;
const ROWS = 6;
const COLUMNS = 7;

// Try to drop a piece in the column and return the row it would land in
export function getAvailableRow(grid: GridItem[][], column: Column): Row | null {
    for (let row = ROWS - 1; row >= 0; row--) {
        if (grid[row][column] === 0) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
            return row as Row;
        }
    }
    return null;
}

// Clone the grid and simulate a move
function simulateMove(grid: Grid, column: Column, player: Player): Grid | null {
    const row = getAvailableRow(grid, column);
    if (row === null) return null;
    const clone = grid.map((r) => [...r]);
    clone[row][column] = player;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    return clone as Grid;
}

function evaluateBoard(grid: Grid, player: Player): number {
    // Basic heuristic:
    // +1000 for win, -1000 for opponent win
    // +score for 3s and 2s
    // Later you can improve this further
    // For now, keep simple:
    const opponent = player === 1 ? 2 : 1;
    const checkScore = (g: Grid, p: Player): number => {
        // Count sequences of 3/2
        let score = 0;
        const directions = [
            { dr: 0, dc: 1 },
            { dr: 1, dc: 0 },
            { dr: 1, dc: 1 },
            { dr: 1, dc: -1 },
        ];

        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLUMNS; col++) {
                for (const { dr, dc } of directions) {
                    let count = 0;
                    for (let i = 0; i < 4; i++) {
                        const r = row + dr * i;
                        const c = col + dc * i;
                        if (r >= 0 && r < ROWS && c >= 0 && c < COLUMNS && g[r][c] === p) {
                            count++;
                        } else if (r >= 0 && r < ROWS && c >= 0 && c < COLUMNS && g[r][c] !== 0) {
                            count = -10;
                            break;
                        }
                    }
                    if (count === 2) score += 5;
                    else if (count === 3) score += 50;
                    else if (count === 4) score += 1000;
                }
            }
        }

        return score;
    };

    return checkScore(grid, player) - checkScore(grid, opponent);
}

// Check if a move results in a win
function checkWin(grid: GridItem[][], row: number, col: number, player: Player): boolean {
    const directions = [
        { dr: 0, dc: 1 }, // horizontal
        { dr: 1, dc: 0 }, // vertical
        { dr: 1, dc: 1 }, // diagonal \
        { dr: 1, dc: -1 }, // diagonal /
    ];

    for (const { dr, dc } of directions) {
        let count = 1;
        for (let d = 1; d < 4; d++) {
            const r = row + dr * d;
            const c = col + dc * d;
            if (r < 0 || r >= ROWS || c < 0 || c >= COLUMNS) break;
            if (grid[r][c] === player) count++;
            else break;
        }
        for (let d = 1; d < 4; d++) {
            const r = row - dr * d;
            const c = col - dc * d;
            if (r < 0 || r >= ROWS || c < 0 || c >= COLUMNS) break;
            if (grid[r][c] === player) count++;
            else break;
        }
        if (count >= 4) return true;
    }

    return false;
}

function minimax(
    grid: Grid,
    depth: number,
    alpha: number,
    beta: number,
    maximizingPlayer: boolean,
    player: Player
): { column: Column; score: number } {
    const opponent = player === 1 ? 2 : 1;
    const validColumns: Column[] = [];
    for (let c = 0 as Column; c < COLUMNS; c++) {
        if (getAvailableRow(grid, c) !== null) validColumns.push(c);
    }

    const isTerminal = validColumns.length === 0 || depth === 0;
    if (isTerminal) {
        return { column: 3, score: evaluateBoard(grid, player) };
    }

    // eslint-disable-next-line @typescript-eslint/prefer-destructuring
    let bestColumn = validColumns[0];
    let bestScore = maximizingPlayer ? -Infinity : Infinity;

    for (const col of validColumns) {
        const row = getAvailableRow(grid, col);
        if (row === null) continue;

        const newGrid = simulateMove(grid, col, maximizingPlayer ? player : opponent);
        if (!newGrid) continue;

        const win = checkWin(newGrid, row, col, maximizingPlayer ? player : opponent);
        const score = win
            ? (maximizingPlayer ? 1 : -1) * 100000
            : minimax(newGrid, depth - 1, alpha, beta, !maximizingPlayer, player).score;

        if (maximizingPlayer) {
            if (score > bestScore) {
                bestScore = score;
                bestColumn = col;
            }
            // eslint-disable-next-line no-param-reassign
            alpha = Math.max(alpha, bestScore);
        } else {
            if (score < bestScore) {
                bestScore = score;
                bestColumn = col;
            }
            // eslint-disable-next-line no-param-reassign
            beta = Math.min(beta, bestScore);
        }

        if (alpha >= beta) break; // Prune
    }

    return { column: bestColumn, score: bestScore };
}

export function getBestCpuMove(grid: Grid, cpuPlayer: Player): Column {
    const { column } = minimax(grid, MAX_DEPTH, -Infinity, Infinity, true, cpuPlayer);
    return column;
}
