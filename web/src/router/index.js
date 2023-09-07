import { createRouter, createWebHistory } from 'vue-router'
import PkindexView from '../views/pk/PkindexView'
import RanklistindexView from '../views/ranklist/RanklistindexView'
import RecordindexView from '../views/record/RecordindexView'
import UserindexView from '../views/user/bot/UserindexView'
import NotFound from '../views/error/NotFound'

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/pk/"
  },
  {
    path: "/pk/",
    name: "pk_index",
    component: PkindexView
  },
  {
    path: "/ranklist/",
    name: "ranklist_index",
    component: RanklistindexView
  },
  {
    path: "/record/",
    name: "record_index",
    component: RecordindexView 
  },
  {
    path: "/user/bot/",
    name: "user_bot_index",
    component: UserindexView
  },
  {
    path: "/404/",
    name: "not_found_index",
    component: NotFound
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404/"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
