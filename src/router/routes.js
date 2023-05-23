function page(path) {
    return () => import(/* webpackChunkName: '' */ `../pages/${path}`).then(m => m.default || m)
  }
  
export default [
    { path: '/', redirect: { name: 'home' } },
    { path: '/inicio', name: 'home', component: page('home/home.vue') },
    { path: '/nosotros',name:'nosotros' ,component: page('about/about.vue')},
    //{ path: '/servicios',name:'servicios' ,component: page('servicios/servicios.vue')},
    { path: '/contacto',name:'contacto' ,component: page('contacto/contacto.vue')},

    { path: '*',name:'error', component: page('errors/404.vue') },
]  