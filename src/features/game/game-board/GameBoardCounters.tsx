import { AnimatePresence } from 'motion/react';
import { useAppSelector } from '../../../store/hooks';
import GameBoardCounter from './GameBoardCounter';

const GameBoardCounters = () => {
    const runs = useAppSelector((state) => state.board.runs);
    return (
        <AnimatePresence>
            {runs.map((run) => (
                <GameBoardCounter
                    key={`${run.row.toString()}-${run.column.toString()}`}
                    run={run}
                />
            ))}
        </AnimatePresence>
    );
};
export default GameBoardCounters;
