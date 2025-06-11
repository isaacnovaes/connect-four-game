import { motion } from 'motion/react';
import { memo } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { play, type Column, type Row } from './boardSlice';

const GameBoardEmptyGridItem = (props: {
    readonly onHover: (spot: number) => void;
    readonly spot: Column;
    readonly gridRow: Row;
}) => {
    const dispatch = useAppDispatch();
    const x = 7 * (props.spot * 6.7 + 1);
    const y = 8 * (props.gridRow * 5.8 + 1);
    console.count(`render item ${props.spot.toString()}-${props.gridRow.toString()}`);
    return (
        <motion.button
            animate={{
                x,
                y,
            }}
            className={`absolute z-40 aspect-square w-10 rounded-full bg-transparent text-transparent hover:cursor-pointer`}
            type='button'
            onClick={() => {
                dispatch(play({ column: props.spot, row: props.gridRow }));
            }}
            onMouseOver={() => {
                props.onHover(props.spot);
            }}
        />
    );
};
export default memo(GameBoardEmptyGridItem);
