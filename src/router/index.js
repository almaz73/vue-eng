import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home.vue';
import Unit1 from '@/pages/Unit1';
import Unit2 from '@/pages/Unit2';
import Unit3 from '@/pages/Unit3';
import Unit4 from '@/pages/Unit4';
import Library from '@/pages/Library.vue';

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
        },
        {
            path: '/unit3',
            name: 'Unit3',
            component: Unit3
        },
        {
            path: '/unit4',
            name: 'Unit4',
            component: Unit4
        },
        {
            path: '/library',
            name: 'Library',
            component: Library
        }

    ]
})