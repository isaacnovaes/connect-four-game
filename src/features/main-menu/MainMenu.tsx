import { AnimatePresence } from 'motion/react';
import { useState } from 'react';
import Button from '../../components/Button';
import PlayerVsCpuIcon from '../../components/icons/PlayerVsCpuIcon';
import PlayerVsPlayerIcon from '../../components/icons/PlayerVsPlayerIcon';
import { useAppDispatch } from '../../store/hooks';
import { setRouter } from '../../store/routeSlice';
import GameModes from './GameModes';
import GameRules from './GameRules';

const MainMenu = () => {
    const [showGameRules, setShowGameRules] = useState(false);
    const dispatch = useAppDispatch();

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
                        dispatch(setRouter('game'));
                    }}
                >
                    <span>PLAY VS CPU </span> <PlayerVsCpuIcon />
                </Button>
                <Button
                    buttonMode='normal'
                    color='yellow'
                    type='button'
                    onClick={() => {
                        dispatch(setRouter('game'));
                    }}
                >
                    <span>PLAY VS PLAYER </span> <PlayerVsPlayerIcon />
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
