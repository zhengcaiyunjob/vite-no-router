import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js'

//app.createApp(App);
// createApp(App).mount('#app')

// 5. 创建并挂载根实例
const app1 = createApp(App);
app1.use(router);
app1.mount('#climb-sub-content');


const app = window.apper;
// 确保 _use_ 路由实例使
// 整个应用支持路由。
app.use(router);



