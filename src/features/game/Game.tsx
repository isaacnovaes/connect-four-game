import BottomBg from './BottomBg';
import GameBoard from './GameBoard';
import GameMenu from './GameMenu';
import GameResult from './GameResult';

const Game = () => {
    return (
        <section className='bg-purple-light h-dvh'>
            <GameMenu />
            <GameResult />
            <GameBoard />
            <BottomBg />
        </section>
    );
};
export default Game;
