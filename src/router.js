import vue from 'vue'
import Router from 'vue-router'

vue.use(Router)
let router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('./components/HelloWorld'),
			meta: {
				requireAuth: false
			}
		},
		{
			path: '/Gallery',
			name: 'Gallery',
			component: () => import('./components/Gallery/gallery'),
			meta: {
				requireAuth: true
			}
		},
		{
			path: '/ContactUs/:name/:location',
			name: 'ContactUs',
			props: true,
			component: () => import('./components/ContactUs/contactUs'),
			meta: {
				requireAuth: false
			}
		},
		{
			path: '*',
			name: '404',
			component: () => import('./components/404'),
			meta: {
				requireAuth: false
			}
		},

	],
	scrollBehaviour() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;

	}

})
router.beforeEach((to, from, next) => {
	if (to.matched.some(route => route.meta.requireAuth)) {
		next({
			name: 'ContactUs', params: {
				name: 'test',
				location: 'kply'
			}
		})
		return
	}
	next()
})
export default router