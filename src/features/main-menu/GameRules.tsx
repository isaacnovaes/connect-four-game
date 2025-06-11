import { motion } from 'motion/react';
import Button from '../../components/Button';
import CheckIcon from '../../components/icons/CheckIcon';

const GameRules = (props: { readonly id: string; readonly onCloseButtonClick: () => void }) => {
    return (
        <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className='shadow-box absolute top-1/2 left-1/2 z-20 w-[90dvw] max-w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-[40px] border-3 border-black bg-white p-9'
            exit={{ opacity: 0, scale: 0 }}
            id={props.id}
            initial={{ opacity: 0, scale: 0 }}
        >
            <h1 className='text-l text-center'>RULES</h1>
            <h2 className='text-s text-purple-light mt-7 mb-4 uppercase'>Objective</h2>
            <p className='text-body font-medium text-black/65'>
                Be the first player to connect 4 of the same colored discs in a row (either
                vertically, horizontally, or diagonally).
            </p>
            <h2 className='text-s text-purple-light mt-7 mb-4 uppercase'>How to play</h2>
            <ol className='text-body list-decimal space-y-[10px] pl-4 font-medium text-black/65 marker:text-black'>
                <li>Red goes first in the first game.</li>
                <li>
                    Players must alternate turns, and only one disc can be dropped in each turn.
                </li>
                <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
                <li>The starter of the previous game goes second on the next game.</li>
            </ol>
            <Button
                buttonMode='icon'
                className='absolute -bottom-10 left-1/2 -translate-x-1/2'
                color='pink'
                type='button'
                onClick={() => {
                    props.onCloseButtonClick();
                }}
            >
                <CheckIcon />
            </Button>
        </motion.div>
    );
};
export default GameRules;
