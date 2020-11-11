import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import LastArticles from './components/LastArticles.vue';
import Blog from './components/Blog.vue';
import Formulario from './components/Formulario.vue';
import Pagina from './components/Pagina.vue';
import MiComponente from './components/MiComponente.vue';



Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path: '/blog',              component: Blog},
  { path: '/home',              component: LastArticles},
  { path: '/formulario',        component: Formulario},
  { path: '/mi-componente',     component: MiComponente},
  { path: '/pagina',            component: Pagina},
  { path: '/',                  component: LastArticles},
]

const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
