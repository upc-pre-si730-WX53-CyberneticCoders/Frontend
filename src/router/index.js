/*import { createRouter, createWebHistory } from 'vue-router';
import DashboardConsumer from '../domains/consumer/components/DashboardConsumer.vue';
import DashboardChef from '../domains/chef/components/DashboardChef.vue';

const routes = [
    {
        path: '/consumer-dashboard',
        name: 'consumer-dashboard',
        component: DashboardConsumer,
    },
    {
        path: '/chef-dashboard',
        name: 'chef-dashboard',
        component: DashboardChef,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
*/



import { createRouter, createWebHistory } from 'vue-router';
import DashboardConsumer from '../domains/consumer/components/DashboardConsumer.vue';
import DashboardChef from '../domains/chef/components/DashboardChef.vue';

const routes = [
    {
        path: '/',
        redirect: '/home' // Redirige a la página principal
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue') // Si usas una vista Home
    },
    {
        path: '/consumer-dashboard',
        name: 'consumer-dashboard',
        component: DashboardConsumer
    },
    {
        path: '/chef-dashboard',
        name: 'chef-dashboard',
        component: DashboardChef
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
