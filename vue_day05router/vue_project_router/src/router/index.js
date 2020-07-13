import Vue from 'vue'
//导入路由插件
import VueRouter from 'vue-router'
//导入路由组件
const Home = () => import('../components/home')
const About = () => import('../components/about')
const News = () => import('../components/news')
const Text = () => import('../components/text')
//注入插件
Vue.use(VueRouter)
//定义路由
const routes = [
  {
    path:'/',
    redirect:'home'
  },
  {
    path:'/home',
    component: Home,
    children:[ //配置子路由
      {
        path:'',
        redirect:'news'
      },
      {
        path:'news',
        component:News
      },
      {
        path:'text',
        component:Text
      }
    ]
  },
  {
    path:'/about',
    component: About
  }
]
//创建router实例
const router = new VueRouter({
  routes,
  mode: 'history'
})
//导出路由实例
export default router
