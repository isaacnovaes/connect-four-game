import type { ReactNode } from 'react';

const GameRules = (props: { readonly children: ReactNode; readonly id?: string }) => {
    return (
        <div
            className='shadow-box absolute top-[50%] left-[50%] h-120 w-[537px] -translate-x-[50%] -translate-y-[50%] rounded-[40px] border-3 border-black bg-white p-9 transition-discrete duration-1000'
            id={props.id}
        >
            <h1 className='text-l text-center'>RULES</h1>
            hello
            {props.children}
        </div>
    );
};
export default GameRules;
