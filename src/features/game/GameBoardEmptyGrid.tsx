import { motion } from 'motion/react';
import { useState } from 'react';
import MarkerRedIcon from '../../components/icons/MarkerRedIcon';
import MarkerYellowIcon from '../../components/icons/MarkerYellowIcon';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { play, type BoardState, type Row } from './boardSlice';

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
    const dispatch = useAppDispatch();
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
                          const x = 7 * (spot * 6.7 + 1);
                          const y = 8 * (gridRow * 5.8 + 1);

                          const isGridItemChosen = runs.find(
                              (run) => run.column === spot && run.row === gridRow
                          );

                          if (isGridItemChosen) {
                              return null;
                          }

                          return (
                              <motion.button
                                  key={`${spot.toString()}-${gridRow.toString()}`}
                                  animate={{
                                      x,
                                      y,
                                  }}
                                  className={`absolute z-40 aspect-square w-10 rounded-full bg-transparent text-transparent hover:cursor-pointer`}
                                  type='button'
                                  onClick={() => {
                                      dispatch(play({ column: spot, row: gridRow }));
                                  }}
                                  onMouseOver={() => {
                                      setHoveredColumn(spot);
                                  }}
                              />
                          );
                      });
                  })
                : null}
        </>
    );
};
export default GameBoardEmptyGrid;
