import Button from '../../components/Button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { restart } from './boardSlice';
import GameTimer from './GameTimer';

const GamePlayerTurn = () => {
    const winnerPlayer = useAppSelector((state) => state.board.winnerPlayer);
    const dispatch = useAppDispatch();

    return (
        <div className='absolute top-73 left-1/2 z-40 -translate-x-1/2'>
            {winnerPlayer === null ? (
                <GameTimer />
            ) : (
                <div className='shadow-box rounded-[20px] bg-white px-19 py-4 text-center outline-2 outline-black'>
                    <p className='text-xs uppercase'>Player {winnerPlayer}</p>
                    <p className='text-l uppercase'>wins</p>
                    <Button
                        buttonMode='small'
                        type='button'
                        onClick={() => {
                            dispatch(restart());
                        }}
                    >
                        play again
                    </Button>
                </div>
            )}
        </div>
    );
};
export default GamePlayerTurn;
