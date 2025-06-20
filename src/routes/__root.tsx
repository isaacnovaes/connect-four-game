import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { useEffect, useRef } from 'react';
import { setWidth } from '../features/game/resizeSlice';
import { useAppDispatch } from '../store/hooks';

const RootComponent = () => {
    const divRef = useRef<HTMLDivElement | null>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            const [divElementResizeInfo] = entries;
            dispatch(setWidth(divElementResizeInfo.contentRect.width));
        });

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [dispatch]);

    return (
        <div
            ref={divRef}
            className='bg-purple-dark **:focus-visible:outline-purple-dark relative h-dvh **:focus-visible:outline-4 **:focus-visible:outline-offset-4'
        >
            <Outlet />
            <TanStackRouterDevtools />
        </div>
    );
};

export const Route = createRootRoute({
    component: RootComponent,
});
