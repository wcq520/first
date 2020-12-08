import Vue from 'vue'
import Router from 'vue-router'

const login =()=>import('../pages/login/login')
const index =()=>import('../pages/index/index')
const home =()=>import('../pages/home/home')
const banner =()=>import('../pages/banner/banner')
const classify =()=>import('../pages/classify/classify')
const goods =()=>import('../pages/goods/goods')
const manager =()=>import('../pages/manager/manager')
const menu =()=>import('../pages/menu/menu')
const role =()=>import('../pages/role/role')
const seckill =()=>import('../pages/seckill/seckill')
const spec =()=>import('../pages/spec/spec')
const vip =()=>import('../pages/vip/vip')

Vue.use(Router)

export const secRouter=[
{
  path:'home',
  name:'主页',
  component:home,
},
{
  path:'banner',
  name:'轮播图管理',
  component:banner,
},
{
  path:'classify',
  name:'商品分类',
  component:classify,
},
{
  path:'goods',
  name:'商品管理',
  component:goods,
},
{
  path:'manager',
  name:'管理员管理',
  component:manager,
},
{
  path:'menu',
  name:'菜单管理',
  component:menu,
},
{
  path:'role',
  name:'角色管理',
  component:role,
},
{
  path:'seckill',
  name:'秒杀活动',
  component:seckill,
},
{
  path:'spec',
  name:'商品规格',
  component:spec,
},
{
  path:'vip',
  name:'会员管理',
  component:vip,
},

]

export default new Router({
  routes: [
      {
        path:'/',
        component:login
      },
      {
        path:'/login',
        component:login
      },
      {
        path:'/index',
        component:index,
        children:[

          ...secRouter,
          {
            path:'',
            redirect:'home'
          }
  ]         
      },
      {
        path:'*',
        redirect:'login'
      }
  ]
})
