function page(path) {
    return () => import(/* webpackChunkName: '' */ `../pages/${path}`).then(m => m.default || m)
  }
  
export default [
    { path: '/', redirect: { name: 'home' } },
    { path: '/inicio', name: 'home', component: page('home/home.vue') },
    { path: '/nosotros',name:'nosotros' ,component: page('about/about.vue')},
]  