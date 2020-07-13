import Vue from 'vue'
//导入路由插件
import VueRouter from 'vue-router'
//导入路由组件
Vue.use(VueRouter)
//定义路由
const routes = [
  {
    path:'/department',
    component:()=> import('@/views/department'),
    meta:{
      title:'部门'
    }
  },
  {
    path:'/userList',
    component:()=> import('@/views/userList'),
    meta:{
      title:'用户列表'
    }
  }
]
//创建router实例
const router = new VueRouter({
  routes,
  mode:'history'
})
//创建完路由实例之后，使用路由守卫
router.beforeEach((to,from,next) => {
  window.document.title = to.meta.title
  next()
})
//导出路由实例
export default router