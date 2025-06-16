import { createRouter, RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { routeTree } from './routeTree.gen';
import { store } from './store/store.ts';

const root = document.getElementById('root');

// Create a new router instance
const router = createRouter({ routeTree });

if (!root) {
    throw new ReferenceError('There is no root element');
}

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

createRoot(root).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
);
