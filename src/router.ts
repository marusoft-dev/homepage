import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import TermsOfService from './views/TermsOfService.vue';
import PrivacyPolicy from './views/PrivacyPolicy.vue';
import CaseProjects from './views/CaseProjects.vue';
import CaseProjectDetail from './views/CaseProjectDetail.vue';
import ContactUs from './views/ContactUs.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/case-projects',
    name: 'CaseProjects',
    component: CaseProjects,
  },
  {
    path: '/case-projects/:date/:slug',
    name: 'CaseProjectDetail',
    component: CaseProjectDetail,
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: ContactUs,
  },
  {
    path: '/terms',
    name: 'TermsOfService',
    component: TermsOfService,
  },
  {
    path: '/privacy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
