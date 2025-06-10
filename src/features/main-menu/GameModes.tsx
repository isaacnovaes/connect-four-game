import type { ReactNode } from 'react';
import Logo from '../../components/icons/Logo';

const GameModes = (props: { readonly children: ReactNode }) => {
    return (
        <div className='bg-purple-light tablet:w-100 tablet:h-[537px] tablet:shadow-box tablet:border-2 tablet:rounded-[40px] tablet:top-1/2 tablet:-translate-y-1/2 tablet:left-1/2 tablet:-translate-x-1/2 absolute flex h-dvh w-full flex-col items-center justify-center gap-y-[79px]'>
            <Logo />
            <section className='flex flex-col gap-y-7.5'>{props.children}</section>
        </div>
    );
};
export default GameModes;
