import { motion } from 'motion/react';
import { useAppSelector } from '../../store/hooks';
import { selectIsTabletBreakPoint } from './resizeSlice';

const BottomBg = () => {
    const winnerPlayer = useAppSelector((s) => s.board.winnerPlayer);
    const isTabletBreakPoint = useAppSelector(selectIsTabletBreakPoint);

    const bg = winnerPlayer ? (winnerPlayer === 1 ? 'bg-pink' : 'bg-yellow') : 'bg-purple-dark';

    return (
        <motion.div
            animate={{ height: isTabletBreakPoint ? 234 : 236 }}
            className={`${bg} tablet:h-[234px] absolute bottom-0 h-[236px] w-full rounded-t-[60px] transition-colors`}
            initial={{ height: 0 }}
            transition={{ type: 'spring', bounce: 0.5, duration: 0.8 }}
        />
    );
};
export default BottomBg;
