import { motion } from 'motion/react';
import type { ReactNode } from 'react';

const GameRules = (props: { readonly children: ReactNode; readonly id?: string }) => {
    return (
        <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className='shadow-box absolute top-1/2 left-1/2 z-20 h-120 w-[90dvw] -translate-x-1/2 -translate-y-1/2 rounded-[40px] border-3 border-black bg-white p-9'
            exit={{ opacity: 0, scale: 0 }}
            id={props.id}
            initial={{ opacity: 0, scale: 0 }}
        >
            <h1 className='text-l text-center'>RULES</h1>
            hello
            {props.children}
        </motion.div>
    );
};
export default GameRules;
