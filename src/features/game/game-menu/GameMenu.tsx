import { useRef } from 'react';
import Button from '../../../components/Button';
import Logo from '../../../components/icons/Logo';
import { useAppDispatch } from '../../../store/hooks';
import { restart, setGameStatus } from '../boardSlice';
import GameMenuDialog from './GameMenuDialog';

const GameMenu = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const dispatch = useAppDispatch();

    return (
        <div className='tablet:max-w-[675px] tablet:py-[30px] desktop:py-[60px] desktop:pb-[70px] mx-auto flex items-center justify-between px-5 py-[50px]'>
            <Button
                buttonMode='small'
                type='button'
                onClick={() => {
                    dispatch(setGameStatus('paused'));
                    dialogRef.current?.showModal();
                }}
            >
                Menu
            </Button>
            <Logo className='h-10 w-10' />
            <Button
                buttonMode='small'
                type='button'
                onClick={() => {
                    dispatch(restart());
                }}
            >
                Restart
            </Button>
            <GameMenuDialog dialogRef={dialogRef} />
        </div>
    );
};
export default GameMenu;
