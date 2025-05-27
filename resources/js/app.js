import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import '/resources/css/dashlite.css';
import '/resources/css/theme.css';
import '/resources/css/dashlite.min.css';
import '/resources/css/dashlite.rtl.css';
import '/resources/css/dashlite.rtl.min.css';





const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(ElementPlus)

            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
