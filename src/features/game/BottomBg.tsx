import { useAppSelector } from '../../store/hooks';

const BottomBg = () => {
    const winnerPlayer = useAppSelector((s) => s.board.winnerPlayer);

    const bg = winnerPlayer ? (winnerPlayer === 1 ? 'bg-pink' : 'bg-yellow') : 'bg-purple-dark';

    return <div className={`${bg} absolute bottom-0 h-[236px] w-full rounded-t-[60px]`} />;
};
export default BottomBg;
