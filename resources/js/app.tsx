import './bootstrap';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import CartProvider from './context/CartContext';

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        createRoot(el).render(
            <CartProvider>
                <App {...props}  />
            </CartProvider>
        )
    },
    progress: {
        delay: 0,
        color: '#F075AA',
        includeCSS: true,
        showSpinner: true,
    },
})
