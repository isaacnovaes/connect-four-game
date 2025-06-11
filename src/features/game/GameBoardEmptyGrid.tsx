import { motion } from 'motion/react';
import { useCallback, useState } from 'react';
import MarkerRedIcon from '../../components/icons/MarkerRedIcon';
import MarkerYellowIcon from '../../components/icons/MarkerYellowIcon';
import { useAppSelector } from '../../store/hooks';
import type { BoardState, Row } from './boardSlice';
import GameBoardEmptyGridItem from './GameBoardEmptyGridItem';

const emptyGrid: BoardState['grid'] = [
    [0, 1, 2, 3, 4, 5, 6],
    [0, 1, 2, 3, 4, 5, 6],
    [0, 1, 2, 3, 4, 5, 6],
    [0, 1, 2, 3, 4, 5, 6],
    [0, 1, 2, 3, 4, 5, 6],
    [0, 1, 2, 3, 4, 5, 6],
];

const GameBoardEmptyGrid = () => {
    const [hoveredColumn, setHoveredColumn] = useState(0);
    const runs = useAppSelector((state) => state.board.runs);
    const playerTurn = useAppSelector((state) => state.board.playerTurn);
    const winnerPlayer = useAppSelector((state) => state.board.winnerPlayer);

    const onEmptyGridItemHover = useCallback((spot: number) => {
        setHoveredColumn(spot);
    }, []);

    return (
        <>
            {winnerPlayer === null && (
                <motion.div
                    animate={{
                        x: 7 * (hoveredColumn * 6.6 + 1),
                        y: -35,
                    }}
                    className='absolute z-40'
                >
                    {playerTurn === 1 ? <MarkerRedIcon /> : <MarkerYellowIcon />}
                </motion.div>
            )}
            {winnerPlayer === null
                ? emptyGrid.map((row, index) => {
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
                      const gridRow = index as Row;

                      return row.map((spot) => {
                          const isGridItemChosen = runs.find(
                              (run) => run.column === spot && run.row === gridRow
                          );

                          if (isGridItemChosen) {
                              return null;
                          }

                          return (
                              <GameBoardEmptyGridItem
                                  key={`${spot.toString()}-${gridRow.toString()}`}
                                  gridRow={gridRow}
                                  spot={spot}
                                  onHover={onEmptyGridItemHover}
                              />
                          );
                      });
                  })
                : null}
        </>
    );
};
export default GameBoardEmptyGrid;
