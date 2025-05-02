import './bootstrap'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.tsx`,
      import.meta.glob('./Pages/**/*.tsx')
    ),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
  progress: {
    delay: 0,
    color: '#F075AA',
    includeCSS: true,
    showSpinner: true,
  },
}).then(() => {
    document.getElementById('app')?.removeAttribute('data-page');
})
