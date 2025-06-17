import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { decreaseTimer, setPlayerTurn } from './boardSlice';

const GameTimer = () => {
    const timeLeft = useAppSelector((s) => s.board.timeLeft);
    const gameState = useAppSelector((s) => s.board.state);
    const isCpuMode = useAppSelector((s) => s.board.isCpuMode);
    const playerTurn = useAppSelector((state) => state.board.playerTurn);
    const dispatch = useAppDispatch();

    const playerTurnIndicator = isCpuMode
        ? playerTurn === 1
            ? 'your turn'
            : "cpu's turn"
        : playerTurn === 1
          ? "Player 1's turn"
          : "Player 2's turn";

    useEffect(() => {
        const timeoutId = setInterval(() => {
            if (gameState === 'idle') {
                dispatch(decreaseTimer());
            }
        }, 1000);

        return () => {
            clearInterval(timeoutId);
        };
    }, [dispatch, gameState]);

    useEffect(() => {
        if (timeLeft < 0) {
            dispatch(setPlayerTurn(playerTurn === 1 ? 2 : 1));
        }
    }, [dispatch, playerTurn, timeLeft]);

    return (
        <svg
            height='156'
            width='197'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
        >
            <defs>
                <filter
                    filterUnits='objectBoundingBox'
                    height='116.2%'
                    id='a'
                    width='108.4%'
                    x='-4.2%'
                    y='-4.2%'
                >
                    <feMorphology
                        in='SourceAlpha'
                        operator='dilate'
                        radius='3'
                        result='shadowSpreadOuter1'
                    />
                    <feOffset dy='10' in='shadowSpreadOuter1' result='shadowOffsetOuter1' />
                    <feComposite
                        in='shadowOffsetOuter1'
                        in2='SourceAlpha'
                        operator='out'
                        result='shadowOffsetOuter1'
                    />
                    <feColorMatrix
                        in='shadowOffsetOuter1'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'
                    />
                </filter>
                <path
                    d='M12.239 34.847 87.279 3.25a20 20 0 0 1 15.454-.029l75.96 31.65A20 20 0 0 1 191 53.333V130c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V53.28a20 20 0 0 1 12.239-18.433Z'
                    id='b'
                />
            </defs>
            <g fill='none' fillRule='evenodd' transform='translate(3 2)'>
                <use fill='#000' filter='url(#a)' xlinkHref='#b' />
                <path
                    className={playerTurn === 1 ? 'fill-pink' : 'fill-yellow'}
                    d='M86.697 1.868a21.5 21.5 0 0 1 16.613-.03l75.96 31.65a21.478 21.478 0 0 1 9.62 7.92 21.478 21.478 0 0 1 3.61 11.925V130a21.433 21.433 0 0 1-6.297 15.203A21.433 21.433 0 0 1 171 151.5H20a21.433 21.433 0 0 1-15.203-6.297A21.433 21.433 0 0 1-1.5 130V53.28c0-4.326 1.296-8.44 3.589-11.893a21.478 21.478 0 0 1 9.568-7.923Z'
                    stroke='#000'
                    strokeWidth='3'
                />
                <g fill={isCpuMode && playerTurn === 2 ? '#000' : '#FFF'}>
                    <text
                        fontSize='16'
                        transform={isCpuMode ? 'translate(50 41)' : 'translate(30 41)'}
                    >
                        <tspan className='text-xs uppercase' x='1.64' y='16'>
                            {playerTurnIndicator}
                        </tspan>
                    </text>
                    <text fontSize='56' transform='translate(45 41)'>
                        <tspan className='text-l tabular-nums' x='.872' y='77'>
                            {new Intl.NumberFormat('en-us', {
                                minimumIntegerDigits: 2,
                            }).format(timeLeft)}
                            s
                        </tspan>
                    </text>
                </g>
            </g>
        </svg>
    );
};
export default GameTimer;
