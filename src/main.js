import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HelloWorld from './views/HelloWorld.vue'
import Home from './views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/test', name: 'HelloWorld', component: HelloWorld},
        {path: '/', name: 'Home', component: Home}

    ]
})

createApp(App)
    .use(router)
    .mount('#app')
