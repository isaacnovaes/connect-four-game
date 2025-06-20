import { selectIsTabletBreakPoint } from '../../../features/game/resizeSlice';
import { useAppSelector } from '../../../store/hooks';
import BoardLayerBlackLarge from './BoardLayerBlackLarge';
import BoardLayerBlackSmall from './BoardLayerBlackSmall';

const BoardLayerBlack = (props: { readonly className: string }) => {
    const isTabletBreakPoint = useAppSelector(selectIsTabletBreakPoint);

    return isTabletBreakPoint ? (
        <BoardLayerBlackLarge className={props.className} />
    ) : (
        <BoardLayerBlackSmall className={props.className} />
    );
};
export default BoardLayerBlack;
