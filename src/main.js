import Vue from 'vue'
import Vuelidate from 'vuelidate';
import App from './App.vue'
import VueRouter from 'vue-router';
import LastArticles from './components/LastArticles.vue';
import Blog from './components/Blog.vue';
import Formulario from './components/Formulario.vue';
import Pagina from './components/Pagina.vue';
import MiComponente from './components/MiComponente.vue';
import Peliculas from './components/Peliculas.vue';
import NoPageFound from './components/shared/NoPageFound.vue';



Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuelidate);

const routes = [
  { path: '/',                  component: LastArticles },
  { path: '/blog',              component: Blog },
  { path: '/home',              component: LastArticles },
  { path: '/formulario',        component: Formulario },
  { path: '/mi-componente',     component: MiComponente },
  { path: '/pagina/:id?',       component: Pagina,  name: 'pagina', },
  { path: '/peliculas',         component: Peliculas,  name: 'peliculas', },
  { path: '*',                  component: NoPageFound },
]

const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
