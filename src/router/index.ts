import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DefaultLayout from '../layout/default.vue'
import Login from '../views/Login.vue'
import Callback from '../views/Callback.vue'
import Album from '../views/Album.vue'
import AlbumID from '../views/AlbumID.vue'
import Artist from '../views/Artist.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback,
    },
    {
      path: '/',
      redirect: '/search',
      name: 'search',
      component: DefaultLayout,
      children: [

        {
          path: '/search',
          name: 'album',
          component: Album,
        },
        {
          path: '/album/:id/',
          name: 'albumId',
          component: AlbumID,
        },
        {
          path: '/Artist/:id/',
          name: 'Artist',
          component: Artist,
        },
      ]
    },
  ]
})

export default router
