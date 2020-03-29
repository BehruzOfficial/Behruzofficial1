import vue from 'vue'
import Router from 'vue-router'
import Uzbek from './language/uzbek'
import Russian from './language/russian'
import filials from './filials/filials'

vue.use(Router);
export default new Router({
routes:[
    {
        path:'/',
        component:Uzbek
    },
    {
        path:'/russian',
        component: Russian
    },
    {
        path:'/filials',
        "component": filials
    },

],
    mode:'history'
})