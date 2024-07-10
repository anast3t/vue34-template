import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/:pathMatch(.*)*',
		component: () =>
			import(/* webpackChunkName: "not_found" */ "../views/Errors/404View.vue")
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
