import { createFileRoute } from '@tanstack/react-router';
import Game from '../features/game/Game';

export const Route = createFileRoute('/play-cpu')({
    component: Game,
});
