import {
  createWebHistory,
  createRouter
} from 'vue-router'
import SeasonOverview from './components/SeasonOverview.vue';
import SeasonGenerator from './components/SeasonGenerator.vue';

const routes = [
  { path: '/', component: SeasonOverview },
  { path: '/season/:seasonId', 
    component: SeasonGenerator, 
    name: 'SeasonGenerator' 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
