import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Document from '../components/Document.vue'
import AdminPanel from '../pages/AdminPanel.vue'
import Table from '../components/Table.vue'


export default new VueRouter({
    routes: [
        { path: 'table', component: Table },
        { path: '/adminpanel/:id', component: AdminPanel },
        { path: '/document/:id', component: Document },
        { path: '/home', component: Home },
        { path: '*', redirect: '/home' } //Переброс на главную по умолчанию
        
    ]
}) 
