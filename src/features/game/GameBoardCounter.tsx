import { motion } from 'motion/react';
import CounterRedSmall from '../../components/CounterRedSmall';
import CounterYellowSmall from '../../components/CounterYellowSmall';
import type { Run } from './boardSlice';

const GameBoardCounter = (props: { readonly run: Run }) => {
    const { run } = props;

    return (
        <motion.div
            key={`${run.row.toString()}-${run.column.toString()}`}
            animate={{
                x: 7 * (run.column * 6.6 + 1),
                y: 8 * (run.row * 5.8 + 1),
            }}
            className='absolute z-20'
            initial={{
                x: 7 * (run.column * 6.6 + 1),
                y: 0,
            }}
        >
            {run.player === 1 ? <CounterRedSmall /> : <CounterYellowSmall />}
            {run.winnerRun ? (
                <div className='absolute top-[18px] left-[17.2px] z-50 size-2 rounded-full outline-6 outline-white' />
            ) : null}
        </motion.div>
    );
};
export default GameBoardCounter;
