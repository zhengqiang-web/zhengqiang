import Vue from 'vue'
import router from 'vue-router'
import Home from "./views/Home.vue"
Vue.use(router)

export default new router({
    mode:'history',
    base:  process.env.BASE_URL,
    routes: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/doce',
          name: 'doce',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/Doce.vue')
        },{
            path:'/blog',
            name:'blog',
            component:()=>import('./views/blog.vue')
        },
        {
            path:'/api',
            name:'api',
            component:()=>import('./views/api.vue')
        },
        {
            path:'/Extentions',
            name:'Extentions',
            component:()=>import('./views/Extentions.vue')
        },
        {
            path:'/faq',
            name:'faq',
            component:()=>import('./views/faq.vue')
        },{
            path:'/update',
            name:'update',
            component:()=>import('./views/update.vue')
        }
      ]
})