import { createRouter, createWebHistory} from 'vue-router';

import homepage from './pages/homepage.vue'
import aboutme from './pages/aboutme.vue'
import my_project from './pages/my_project.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name:'home',
            component: homepage
        },
        {
            path:'/aboutme',
            name:'aboutme',
            component: aboutme
        },
        {
            path:'/my_project',
            name:'my_project',
            component: my_project
        },
    ]
});

export { router };


