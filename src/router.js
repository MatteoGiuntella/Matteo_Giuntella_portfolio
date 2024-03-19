import { createRouter, createWebHistory} from 'vue-router';

import homepage from './pages/homepage.vue'
import aboutus from './pages/aboutus.vue'
import starthere from './pages/starthere.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name:'home',
            component: homepage
        },
        {
            path:'/aboutus',
            name:'aboutus',
            component: aboutus
        },
        {
            path:'/starthere',
            name:'starthere',
            component: starthere
        },
    ]
});

export { router };


