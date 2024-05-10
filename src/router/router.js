import {createRouter, createWebHistory } from 'vue-router';

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
    { path: '/', component: About },
    { path: '/oms/cashFlow/moneyThaw', component: About },
    { path: '/oms/cashFlow/statusQuery', component: Home },
    { path: '/', component: Home }
]

const router = createRouter({
    history: createWebHistory(),
    routes:routes,
    strict: true, // applies to all routes
})

export default router;