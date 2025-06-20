import BoardLayerBlack from '../../../components/BoardLayers/BoardLayerBlack/BoardLayerBlack';
import BoardLayerWhite from '../../../components/BoardLayers/BoardLayerWhite/BoardLayerWhite';
import GamePlayerTurn from '../GamePlayerTurn';
import GameBoardCounters from './GameBoardCounters';
import GameBoardEmptyGrid from './GameBoardEmptyGrid';

const GameBoard = () => {
    return (
        <div className='tablet:w-[632px] tablet:h-[584px] relative mx-auto h-[310px] w-[335px]'>
            <BoardLayerBlack className='tablet:top-2 absolute z-10' />
            <GameBoardCounters />
            <BoardLayerWhite className='absolute z-40' />
            <GameBoardEmptyGrid />
            <GamePlayerTurn />
        </div>
    );
};
export default GameBoard;
