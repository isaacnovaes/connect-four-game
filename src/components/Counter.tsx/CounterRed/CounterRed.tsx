import { selectIsTabletBreakPoint } from '../../../features/game/resizeSlice';
import { useAppSelector } from '../../../store/hooks';
import CounterRedLarge from './CounterRedLarge';
import CounterRedSmall from './CounterRedSmall';

const CounterRed = () => {
    const isTabletBreakPoint = useAppSelector(selectIsTabletBreakPoint);

    return isTabletBreakPoint ? <CounterRedLarge /> : <CounterRedSmall />;
};
export default CounterRed;
