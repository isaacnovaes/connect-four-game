import { selectIsTabletBreakPoint } from '../../../features/game/resizeSlice';
import { useAppSelector } from '../../../store/hooks';
import BoardLayerWhiteLarge from './BoardLayerWhiteLarge';
import BoardLayerWhiteSmall from './BoardLayerWhiteSmall';

const BoardLayerWhite = (props: { readonly className: string }) => {
    const isTabletBreakPoint = useAppSelector(selectIsTabletBreakPoint);

    return isTabletBreakPoint ? (
        <BoardLayerWhiteLarge className={props.className} />
    ) : (
        <BoardLayerWhiteSmall className={props.className} />
    );
};
export default BoardLayerWhite;
