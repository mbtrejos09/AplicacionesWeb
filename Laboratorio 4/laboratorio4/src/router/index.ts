import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue'),
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../views/Experience.vue'),
    },
        {
      path: '/education',
      name: 'education',
      component: () => import('../views/Education.vue'),
    },
    {
      path: '/awards',
      name: 'awards',
      component: () => import('../views/Awards.vue'),
    },
    {
      path: '/interests',
      name: 'interests',
      component: () => import('../views/Interests.vue'),
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/Skills.vue'),
    },
  ],
})

export default router
