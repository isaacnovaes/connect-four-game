import { createFileRoute } from '@tanstack/react-router';
import MainMenu from '../features/main-menu/MainMenu';

export const Route = createFileRoute('/')({
    component: MainMenu,
});
