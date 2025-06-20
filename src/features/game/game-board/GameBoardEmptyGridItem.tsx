import { motion } from 'motion/react';
import { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { play, type Column, type Row } from '../boardSlice';
import { selectIsTabletBreakPoint } from '../resizeSlice';

const GameBoardEmptyGridItem = (props: {
    readonly onHover: (spot: number) => void;
    readonly spot: Column;
    readonly gridRow: Row;
}) => {
    const isCpuMode = useAppSelector((state) => state.board.isCpuMode);
    const playerTurn = useAppSelector((state) => state.board.playerTurn);
    const isTabletBreakPoint = useAppSelector(selectIsTabletBreakPoint);

    const dispatch = useAppDispatch();

    const animate = isTabletBreakPoint
        ? { x: (530 / 6) * props.spot + 20, y: 88 * props.gridRow + 20 }
        : { x: 7 * (props.spot * 6.7 + 1), y: 8 * (props.gridRow * 5.8 + 1) };

    const shouldGridItemBeActive = !isCpuMode || playerTurn === 1;

    return (
        <motion.button
            animate={animate}
            className={`tablet:w-16 absolute z-40 aspect-square w-10 rounded-full bg-transparent text-transparent hover:cursor-pointer ${!shouldGridItemBeActive ? 'pointer-events-none' : ''}`}
            type='button'
            onClick={() => {
                if (shouldGridItemBeActive) {
                    dispatch(play({ column: props.spot, row: props.gridRow }));
                }
            }}
            onMouseOver={() => {
                if (shouldGridItemBeActive) {
                    props.onHover(props.spot);
                }
            }}
        />
    );
};
export default memo(GameBoardEmptyGridItem);
