import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueMeta from 'vue-meta'

Vue.config.devtools = false;
Vue.config.productionTip=false;
Vue.use(VueMeta);
new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
