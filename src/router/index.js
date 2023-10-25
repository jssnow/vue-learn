import {
    createRouter,
    createWebHashHistory,
  } from 'vue-router'
  import Home from '../pages/Home.vue'
  import About from '../pages/About.vue'
  import Login from '../pages/Login.vue'
  import Register from '../pages/Register.vue'
  import UserList from '../pages/UserList.vue'

  const routes = [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/userList',
      name: 'UserList',
      component: UserList
    },
  ]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router
  