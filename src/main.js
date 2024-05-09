import {createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import App from './App.vue'

//app.createApp(App);
// createApp(App).mount('#app')
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
    { path: '/', component: About },
    { path: '/oms/cashFlow/moneyThaw', component: About },
    { path: '/oms/cashFlow/statusQuery', component: Home },
]

const router = createRouter({
    history: createWebHistory(),
    routes:routes,
    strict: true, // applies to all routes
})
// 5. 创建并挂载根实例
const app1 = createApp(App);
const app = window.apper;
// 确保 _use_ 路由实例使
// 整个应用支持路由。
app.use(router)

app.mount('#climb-sub-content')

