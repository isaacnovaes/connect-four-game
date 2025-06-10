import PlayerOneIcon from '../../components/icons/PlayerOneIcon';
import PlayerTwoIcon from '../../components/icons/PlayerTwoIcon';
import { useAppSelector } from '../../store/hooks';

const GameResult = () => {
    const runs = useAppSelector((state) => state.board.runs);

    const playerOnePoints = runs.filter((r) => r.player === 1).length * 4;
    const playerTwoPoints = runs.filter((r) => r.player === 2).length * 4;

    return (
        <div className='mb-[50px] flex h-[81px] items-center justify-between px-9'>
            <div className='shadow-box relative flex h-[81px] basis-[142px] flex-col items-center justify-between rounded-[20px] border-2 border-black bg-white py-[10px]'>
                <span className='text-xs uppercase'>Player 1</span>
                <span className='text-[32px]'>{playerOnePoints}</span>
                <PlayerOneIcon className='absolute top-[10px] -left-[30px]' />
            </div>
            <div className='shadow-box relative flex h-[81px] basis-[142px] flex-col items-center justify-between rounded-[20px] border-2 border-black bg-white py-[10px]'>
                <span className='text-xs uppercase'>Player 2</span>
                <span className='text-[32px]'>{playerTwoPoints}</span>
                <PlayerTwoIcon className='absolute top-[10px] -right-[30px]' />
            </div>
        </div>
    );
};
export default GameResult;
