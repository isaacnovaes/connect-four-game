import { motion } from 'motion/react';
import CounterRed from '../../../components/Counter.tsx/CounterRed/CounterRed';
import CounterYellow from '../../../components/Counter.tsx/CounterYellow/CounterYellow';
import { useAppSelector } from '../../../store/hooks';
import type { Run } from '../boardSlice';
import { selectIsTabletBreakPoint } from '../resizeSlice';

const GameBoardCounter = (props: { readonly run: Run }) => {
    const { run } = props;
    const isTabletBreakPoint = useAppSelector(selectIsTabletBreakPoint);

    const animate = isTabletBreakPoint
        ? {
              x: (530 / 6) * run.column + 16,
              y: 88 * run.row + 17,
          }
        : {
              x: 7 * (run.column * 6.6 + 1),
              y: 8 * (run.row * 5.8 + 1),
          };

    const initial = isTabletBreakPoint
        ? {
              x: (530 / 6) * run.column + 16,
              y: 0,
          }
        : {
              x: 7 * (run.column * 6.6 + 1),
              y: 0,
          };

    return (
        <motion.div
            key={`${run.row.toString()}-${run.column.toString()}`}
            animate={animate}
            className='absolute z-20'
            initial={initial}
        >
            {run.player === 1 ? <CounterRed /> : <CounterYellow />}
            {run.winnerRun ? (
                isTabletBreakPoint ? (
                    <div className='absolute top-1/2 left-1/2 z-50 size-6 -translate-1/2 rounded-full outline-7 outline-white' />
                ) : (
                    <div className='absolute top-[18px] left-[17.2px] z-50 size-2 rounded-full outline-6 outline-white' />
                )
            ) : null}
        </motion.div>
    );
};
export default GameBoardCounter;
