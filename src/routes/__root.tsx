import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
    component: () => (
        <div className='bg-purple-dark relative h-dvh'>
            <Outlet />
            <TanStackRouterDevtools />
        </div>
    ),
});
