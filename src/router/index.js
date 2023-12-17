import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
          path: '/',
          name: 'main',
          component: () => import("../views/Main.vue"),
        },
        {
            path: '/fantasy',
            name: 'fantasy',
            component: () => import("../views/Fantasy.vue"),
          },
          {
            path: '/royale',
            name: 'royale',
            component: () => import("../views/Royale.vue"),
          },
          {
            path: '/shooter',
            name: 'shooter',
            component: () => import("../views/Shooter.vue"),
          },
          {
            path: '/rpg',
            name: 'rpg',
            component: () => import("../views/Rpg.vue"),
          },
          {
            path: '/strategy',
            name: 'strategy',
            component: () => import("../views/Strategy.vue"),
          },
          {
            path: '/detail/:id',
            name: 'detail',
            component: () => import("../views/Detail.vue"),
          },
        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (About.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import('../views/AboutView.vue')
        // }
    ],
});

export default router;