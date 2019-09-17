import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Advantages from './views/Advantages'
import Itinerary from './views/Itinerary'
import About from './views/About'
import AboutUfes from './views/AboutUfes'
import AboutConceptho from './views/AboutConceptho'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/advantages',
      name: 'Advantages',
      component: Advantages
    },
    {
      path: '/itinerary',
      name: 'Itinerary',
      component: Itinerary
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      children: [
        {
          path: 'ufes',
          name: 'AboutUfes',
          component: AboutUfes
        },
        {
          path: 'conceptho',
          name: 'AboutConceptho',
          component: AboutConceptho
        }
      ]
    }
    // {
    //   path: '/itinerary',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
