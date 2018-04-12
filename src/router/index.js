import Vue from 'vue'
import Router from 'vue-router'

import TaskList from '../components/TaskList/TaskList'
import Mine from '../components/Mine/Mine'
import Ground from '../components/Ground/Ground'
import NewHabit from '../components/NewHabit/NewHabit'
import HabitList from '../components/NewHabit/HabitList'

Vue.use(Router)
let router = new Router({
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
    }
  ]
})

router.afterEach((to, from, next) => {
  document.title = to.name
})

export default router
