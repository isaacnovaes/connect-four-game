import { selectIsTabletBreakPoint } from '../../../features/game/resizeSlice';
import { useAppSelector } from '../../../store/hooks';
import CounterYellowLarge from './CounterYellowLarge';
import CounterYellowSmall from './CounterYellowSmall';

const CounterYellow = () => {
    const isTabletBreakPoint = useAppSelector(selectIsTabletBreakPoint);

    return isTabletBreakPoint ? <CounterYellowLarge /> : <CounterYellowSmall />;
};
export default CounterYellow;
