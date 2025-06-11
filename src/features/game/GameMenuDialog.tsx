import Button from '../../components/Button';
import { useAppDispatch } from '../../store/hooks';
import { setRouter } from '../../store/routeSlice';
import { restart, setGameStatus } from './boardSlice';

const GameMenuDialog = (props: {
    readonly dialogRef: React.RefObject<HTMLDialogElement | null>;
}) => {
    const dispatch = useAppDispatch();

    return (
        <dialog
            ref={props.dialogRef}
            className='mx-auto mt-10 h-screen max-h-none max-w-none place-items-center bg-transparent backdrop:bg-black/40 backdrop:backdrop-blur-xs backdrop:transition-all backdrop:transition-discrete backdrop:duration-300 open:grid starting:backdrop:bg-black/0'
        >
            <div className='bg-purple-light flex w-[93dvw] max-w-[480px] flex-col gap-y-12 rounded-[40px] p-5 pb-7 duration-700 starting:translate-y-3'>
                <h1 className='text-l mt-2.5 text-center text-white uppercase'>pause</h1>
                <div className='flex flex-col justify-between gap-y-6'>
                    <Button
                        // eslint-disable-next-line jsx-a11y/no-autofocus
                        autoFocus
                        buttonMode='normal'
                        className='uppercase'
                        color='white'
                        type='button'
                        onClick={() => {
                            props.dialogRef.current?.close();
                            dispatch(setGameStatus('idle'));
                        }}
                    >
                        continue game
                    </Button>
                    <Button
                        buttonMode='normal'
                        className='uppercase'
                        color='white'
                        type='button'
                        onClick={() => {
                            dispatch(restart());
                            props.dialogRef.current?.close();
                        }}
                    >
                        restart
                    </Button>
                    <Button
                        buttonMode='normal'
                        className='uppercase'
                        color='pink'
                        type='button'
                        onClick={() => {
                            props.dialogRef.current?.close();
                            dispatch(restart());
                            dispatch(setRouter('menu'));
                        }}
                    >
                        quit game
                    </Button>
                </div>
            </div>
        </dialog>
    );
};
export default GameMenuDialog;
