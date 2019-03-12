import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home.vue';
import Unit1 from '@/pages/Unit1';
import Unit2 from '@/pages/Unit2';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/unit1',
            name: 'Unit1',
            component: Unit1
        },
        {
            path: '/unit2',
            name: 'Unit2',
            component: Unit2
        }
    ]
})