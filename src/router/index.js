import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Auth'
import Main from '@/components/main';
import Chat from '@/components/Chat';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/Chat',
          name: 'Chat',
          component: Chat
        }
      ]
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
