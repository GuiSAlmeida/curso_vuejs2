import Vue from 'vue'
import Router from 'vue-router'
import Init from './components/Init'
import Menu from './components/template/Menu'
// import Users from './components/user/Users'
// import UserList from './components/user/UserList'
// import UserDetail from './components/user/UserDetail'
// import UserEdit from './components/user/UserEdit'

Vue.use(Router)

const Users = () => import('./components/user/Users')
const UserList = () => import('./components/user/UserList')
const UserDetail = () => import('./components/user/UserDetail')
const UserEdit = () => import('./components/user/UserEdit')

const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return { selector: to.hash, behavior: 'smooth' }
        } else {
            return { x: 0, y: 0, behavior: 'smooth' }
        }
    },
    routes: [{
        path: '/',
        name: 'home',
        // component: Init
        components: {
            default: Init,
            menu: Menu
        }
    },
    {
        path: '/user',
        // component: Users,
        components: {
            default: Users,
            menu: Menu
        },
        children: [
            { path: '', component: UserList },
            { 
                path: ':id', 
                component: UserDetail, 
                props: true,
                beforeEnter: (to, from, next) => {
                    // eslint-disable-next-line no-console
                    console.log('antes da rota local');
                    next();
                }
            },
            { path: ':id/edit', component: UserEdit, props: true, name: 'editUser' },
        ]
    },
    {
        path: '*',
        redirect: '/'
    }
]
})

/**
 * Interceptando rotas globalmente, 
 * antes de cada rota vai ser rodado o callback passado no beforeEach
 * 
 * to   = rota de origem
 * from = rota de destino
 * next = comando que encaminha para rota, 
 *        sem passar ele não é finalizada a rota.
 *        Pode ser passado uma rota especifica no next,
 *        ou passar um false para ele não seguir.
 * 
 * Nesse passo não temos acesso ao this porque o componente ainda não foi montado.
 */
router.beforeEach((to,from, next) => {
    // eslint-disable-next-line no-console
    console.log('antes das rotas');
    next();
})


export default router;