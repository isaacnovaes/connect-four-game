import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import Button from '../../components/Button';
import IconCheck from '../../components/IconCheck';
import PlayerVsCpuIcon from '../../components/PlayerVsCpuIcon';
import PlayerVsPlayerIcon from '../../components/PlayerVsPlayerIcon';
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
                    <motion.div
                        animate={{ opacity: 1, scale: 1 }}
                        className='absolute top-[50%] left-[50%] z-20 h-120 w-[537px] -translate-x-[50%] -translate-y-[50%]'
                        exit={{ opacity: 0, scale: 0 }}
                        initial={{ opacity: 0, scale: 0 }}
                    >
                        <GameRules id='game-rules'>
                            <Button
                                className='target'
                                color='pink'
                                isIcon
                                type='button'
                                onClick={() => {
                                    toggleShowGameRules();
                                }}
                            >
                                <IconCheck />
                            </Button>
                        </GameRules>
                    </motion.div>
                ) : null}
            </AnimatePresence>
            <GameModes>
                <Button color='pink' type='button'>
                    <span>PLAY VS CPU </span> <PlayerVsCpuIcon />
                </Button>
                <Button color='yellow' type='button'>
                    <span>PLAY VS PLAYER </span> <PlayerVsPlayerIcon />
                </Button>
                <Button
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
