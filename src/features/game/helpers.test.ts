import { describe, expect, test } from 'vitest';
import { checkWinner, formatNumberDisplay, isGameTied } from './helpers';

describe('Game helpers', () => {
    test('should not return winner', () => {
        expect(
            checkWinner({
                grid: [
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 1, 2, 0, 0],
                    [0, 0, 2, 2, 1, 0, 0],
                    [0, 2, 1, 2, 1, 0, 0],
                    [0, 2, 1, 1, 2, 0, 2],
                ],
                columnIndex: 2,
                rowIndex: 2,
                player: 2,
            })
        ).toStrictEqual({ winner: false });
    });

    test('should return winner for horizontal win', () => {
        expect(
            checkWinner({
                grid: [
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [1, 1, 1, 1, 2, 0, 0],
                    [2, 2, 2, 1, 1, 0, 0],
                    [2, 2, 1, 2, 1, 0, 0],
                    [1, 2, 1, 1, 2, 0, 2],
                ],
                columnIndex: 2,
                rowIndex: 2,
                player: 1,
            })
        ).toStrictEqual({
            winner: true,
            runs: [
                { column: 0, row: 2 },
                { column: 1, row: 2 },
                { column: 2, row: 2 },
                { column: 3, row: 2 },
            ],
        });
    });

    test('should return winner for left diagonal win', () => {
        expect(
            checkWinner({
                grid: [
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 1, 2, 0, 0],
                    [0, 1, 2, 2, 1, 0, 0],
                    [0, 2, 1, 2, 1, 0, 0],
                    [0, 2, 1, 1, 2, 0, 2],
                ],
                columnIndex: 1,
                rowIndex: 2,
                player: 2,
            })
        ).toStrictEqual({
            winner: true,
            runs: [
                { column: 1, row: 2 },
                { column: 2, row: 3 },
                { column: 3, row: 4 },
                { column: 4, row: 5 },
            ],
        });
    });

    test('should return winner for right diagonal win', () => {
        expect(
            checkWinner({
                grid: [
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 0, 1, 2, 1, 0],
                    [0, 1, 2, 2, 1, 0, 0],
                    [0, 2, 1, 1, 1, 0, 0],
                    [0, 2, 1, 1, 2, 0, 2],
                ],
                columnIndex: 5,
                rowIndex: 2,
                player: 1,
            })
        ).toStrictEqual({
            winner: true,
            runs: [
                { column: 5, row: 2 },
                { column: 4, row: 3 },
                { column: 3, row: 4 },
                { column: 2, row: 5 },
            ],
        });
    });

    test('should return winner for vertical win', () => {
        expect(
            checkWinner({
                grid: [
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 1, 2, 2, 0],
                    [0, 0, 2, 2, 1, 2, 0],
                    [0, 2, 1, 2, 1, 2, 0],
                    [0, 2, 1, 1, 2, 2, 2],
                ],
                columnIndex: 5,
                rowIndex: 2,
                player: 2,
            })
        ).toStrictEqual({
            winner: true,
            runs: [
                { column: 5, row: 2 },
                { column: 5, row: 3 },
                { column: 5, row: 4 },
                { column: 5, row: 5 },
            ],
        });
    });

    test('should return game not tied', () => {
        expect(
            isGameTied([
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 2, 2, 0],
                [0, 0, 2, 2, 1, 2, 0],
                [0, 2, 1, 2, 1, 2, 0],
                [0, 2, 1, 1, 2, 2, 2],
            ])
        ).toBeFalsy();
    });

    test('should format number well', () => {
        expect(formatNumberDisplay(58484)).toBe('58,484');
    });

    test('should format number well', () => {
        expect(formatNumberDisplay(0.58)).toBe('00.58');
    });
});
