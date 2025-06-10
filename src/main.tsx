import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './index.css';
import { store } from './store/store.ts';

const root = document.getElementById('root');

if (!root) {
    throw new ReferenceError('There is no root element');
}

createRoot(root).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);
