import BoardLayerBlackSmall from '../../components/BoardLayers/BoardLayerBlackSmall';
import BoardLayerWhiteSmall from '../../components/BoardLayers/BoardLayerWhiteSmall';
import GameBoardCounters from './GameBoardCounters';
import GameBoardEmptyGrid from './GameBoardEmptyGrid';
import GamePlayerTurn from './GamePlayerTurn';

const GameBoard = () => {
    return (
        <div className='relative mx-auto h-[310px] w-[335px]'>
            <BoardLayerBlackSmall className='absolute z-10' />
            <GameBoardCounters />
            <BoardLayerWhiteSmall className='absolute z-40' />
            <GameBoardEmptyGrid />
            <GamePlayerTurn />
        </div>
    );
};
export default GameBoard;
