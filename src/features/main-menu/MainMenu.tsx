import { Link } from '@tanstack/react-router';
import { AnimatePresence } from 'motion/react';
import { useState } from 'react';
import Button from '../../components/Button';
import PlayerVsCpuIcon from '../../components/icons/PlayerVsCpuIcon';
import PlayerVsPlayerIcon from '../../components/icons/PlayerVsPlayerIcon';
import GameModes from './GameModes';
import GameRules from './GameRules';

const MainMenu = () => {
    const [showGameRules, setShowGameRules] = useState(false);

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
                <Button buttonMode='normal' color='pink' type='button'>
                    <Link to='/play-cpu'>PLAY VS CPU</Link>
                    <PlayerVsCpuIcon />
                </Button>
                <Button buttonMode='normal' color='yellow' type='button'>
                    <Link to='/play-player'>PLAY VS PLAYER</Link>
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
