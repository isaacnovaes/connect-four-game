import { motion } from 'motion/react';
import CpuIcon from '../../components/icons/CpuIcon';
import PlayerOneIcon from '../../components/icons/PlayerOneIcon';
import PlayerTwoIcon from '../../components/icons/PlayerTwoIcon';
import { useAppSelector } from '../../store/hooks';
import { formatNumberDisplay } from './helpers';

const GameResult = () => {
    const runs = useAppSelector((state) => state.board.runs);
    const isCpuMode = useAppSelector((state) => state.board.isCpuMode);
    const playerOnePoints = runs.filter((r) => r.player === 1).length * 4;
    const playerTwoPoints = runs.filter((r) => r.player === 2).length * 4;

    return (
        <div className='tablet:max-w-[650px] desktop:max-w-[1200px] desktop:left-[5%] desktop:right-[5%] desktop:top-[300px] desktop:absolute mx-auto mb-[50px] flex h-[81px] items-center justify-between px-9'>
            <motion.div
                animate={{ scale: 1, rotate: 0 }}
                className='shadow-box tablet:flex-row tablet:p-10 desktop:flex-col desktop:h-[150px] desktop:w-auto desktop:basis-auto tablet:basis-[272px] relative flex h-[81px] basis-[142px] flex-col items-center justify-between rounded-[20px] border-2 border-black bg-white py-[10px]'
                initial={{ scale: 0, rotate: 90 }}
                transition={{ type: 'spring', bounce: 0.5, duration: 0.8, delay: 0.2 }}
            >
                <span className='desktop:text-s text-xs uppercase'>
                    {isCpuMode ? 'You' : 'Player 1'}
                </span>
                <span className='desktop:text-l text-[32px] tabular-nums'>
                    {formatNumberDisplay(playerOnePoints)}
                </span>
                <PlayerOneIcon className='desktop:-top-6 desktop:left-1/2 desktop:-translate-x-1/2 absolute top-[10px] -left-[30px]' />
            </motion.div>
            <motion.div
                animate={{ scale: 1, rotate: 0 }}
                className='shadow-box tablet:flex-row tablet:p-10 desktop:flex-col desktop:h-[150px] desktop:w-auto desktop:basis-auto tablet:basis-[272px] relative flex h-[81px] basis-[142px] flex-col items-center justify-between rounded-[20px] border-2 border-black bg-white py-[10px]'
                initial={{ scale: 0, rotate: 90 }}
                transition={{ type: 'spring', bounce: 0.5, duration: 0.8, delay: 0.4 }}
            >
                <span className='desktop:text-s text-xs uppercase'>
                    {isCpuMode ? 'CPU' : 'Player 1'}
                </span>
                <span className='desktop:text-l text-[32px] tabular-nums'>
                    {formatNumberDisplay(playerTwoPoints)}
                </span>
                {isCpuMode ? (
                    <CpuIcon className='desktop:-top-6 desktop:left-1/2 desktop:-translate-x-1/2 absolute top-[10px] -right-[30px]' />
                ) : (
                    <PlayerTwoIcon className='desktop:-top-6 desktop:left-1/2 desktop:-translate-x-1/2 absolute top-[10px] -right-[30px]' />
                )}
            </motion.div>
        </div>
    );
};
export default GameResult;
