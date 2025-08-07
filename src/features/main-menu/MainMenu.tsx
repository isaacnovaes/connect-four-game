import { getRouteApi } from '@tanstack/react-router';
import { AnimatePresence } from 'motion/react';
import { useState } from 'react';
import Button from '../../components/Button';
import PlayerVsCpuIcon from '../../components/icons/PlayerVsCpuIcon';
import PlayerVsPlayerIcon from '../../components/icons/PlayerVsPlayerIcon';
import { useAppDispatch } from '../../store/hooks';
import { setCpuMode } from '../game/boardSlice';
import GameModes from './GameModes';
import GameRules from './GameRules';

const MainMenu = () => {
    const [showGameRules, setShowGameRules] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = getRouteApi('/').useNavigate();

    const toggleShowGameRules = () => {
        setShowGameRules((sgr) => !sgr);
    };

    return (
        <>
            <AnimatePresence>
                {showGameRules ? (
                    <GameRules
                        id='game-rules'
                        onCloseButtonClick={() => {
                            toggleShowGameRules();
                        }}
                    />
                ) : null}
            </AnimatePresence>
            <GameModes>
                <Button
                    buttonMode='normal'
                    color='pink'
                    type='button'
                    onClick={() => {
                        dispatch(setCpuMode(true));
                        void navigate({ to: '/play-cpu' });
                    }}
                >
                    <span>PLAY VS CPU</span>
                    <PlayerVsCpuIcon />
                </Button>

                <Button
                    buttonMode='normal'
                    color='yellow'
                    type='button'
                    onClick={() => {
                        dispatch(setCpuMode(false));
                        void navigate({ to: '/play-player' });
                    }}
                >
                    <span>PLAY VS PLAYER</span>
                    <PlayerVsPlayerIcon />
                </Button>
                <Button
                    buttonMode='normal'
                    color='white'
                    type='button'
                    onClick={() => {
                        toggleShowGameRules();
                    }}
                >
                    GAME RULES
                </Button>
            </GameModes>
        </>
    );
};

export default MainMenu;
