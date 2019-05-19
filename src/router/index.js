import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve=>require(['@/components/home/index.vue'],resolve)
    },{
      path:'/list',
      name:'list',
      component:resolve => require(['@/components/list/goodslist.vue'],resolve)
    },{
      path:'/goodsinfo',
      name:'goodsinfo',
      component:resolve=>require(['@/components/goodsinfo/goodsinfo.vue'],resolve)
    }
  ]
})
