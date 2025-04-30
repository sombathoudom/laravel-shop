import './bootstrap';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import CartProvider from './context/CartContext';
import { Suspense } from 'react';
import Loading from '@/components/Loading';
createInertiaApp({
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        createRoot(el).render(
            <Suspense fallback={<Loading/>}>
                <CartProvider>
                    <App {...props}  />
                </CartProvider>
            </Suspense>
        )
    },
    progress: {
        color: '#000000',
        showSpinner: true,
    },
})
