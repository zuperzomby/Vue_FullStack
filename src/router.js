import Vue from 'vue'
import VueRouter from 'vue-router'
import Column from './theme/Column.vue'
import NotFound from './theme/NotFound.vue'
import Detail from './theme/Detail.vue'
import CreateCard from './theme/CreateCard.vue'
import DeleteCard from './theme/DeleteCard.vue'
import EditCard from './theme/EditCard.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({ y:0 }),
  routes: [
    { path: '/cards', name: 'card', component: Column},
    { path: '/create', name: 'create', component: CreateCard},
    { path: '/delete/:cardId', name: 'delete', component: DeleteCard},
    { path: '/edit/:cardId', name:'edit', component: EditCard},
    { path: '/', redirect: '/cards'},
    { path: '*', component: NotFound},
    { path: '/notFound', component: NotFound},
    { path: '/cards/:cardId', name: 'detail', component: Detail}
]
})

export default router
