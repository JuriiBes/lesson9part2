import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/MyHome.vue'
import Company from '../pages/MyCompany/index.vue'
import AboutUs from '../pages/AboutUs.vue'
import Contacts from '../pages/MyContacts.vue'
import CompanyEditor from '../pages/MyCompany/CompanyEditor.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/company',
        name: 'company',
        component: Company,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutUs,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: Contacts,
    },
    {
        path: '/editor/:type_editor/:id?',
        name: 'editor',
        component: CompanyEditor,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
