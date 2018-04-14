import Vue from 'vue'
import Router from 'vue-router'

import TaskList from '../components/TaskList/TaskList'
import Mine from '../components/Mine/Mine'
import Ground from '../components/Ground/Ground'
import NewHabit from '../components/NewHabit/NewHabit'
import HabitList from '../components/NewHabit/HabitList'
import Login from '../components/Verify/Login'
import Register from '../components/Verify/Register'
import MySet from '../components/Set/Set'

Vue.use(Router)
let router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/tasklist'
    },
    {
      path: '/tasklist',
      name: '我的任务',
      component: TaskList
    },
    {
      path: '/ground',
      name: '广场',
      component: Ground
    },
    {
      path: '/mine',
      name: '我',
      component: Mine
    },
    {
      path: '/newhabit',
      redirect: '/newhabit/hot',
      component: NewHabit,
      children: [
        {
          path: '/newhabit/:type',
          name: '习惯分类筛选',
          component: HabitList
        }
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/register',
      name: '注册',
      component: Register    
    },
    {
      path: '/set',
      name: '个人设置',
      component: MySet
    }
  ]
})

router.afterEach((to, from, next) => {
  document.title = to.name
})

export default router
