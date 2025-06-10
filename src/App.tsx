import Game from './features/game/Game';
import MainMenu from './features/main-menu/MainMenu';
import { useAppSelector } from './store/hooks';

function App() {
    const router = useAppSelector((state) => state.router.route);
    return (
        <div className='bg-purple-dark relative h-dvh'>
            {router === 'menu' && <MainMenu />}
            {router === 'game' && <Game />}
        </div>
    );
}

export default App;
