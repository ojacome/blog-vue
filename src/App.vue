<template>
  <div id="app">
    <Header/>
    <Slider/>
    <div class="center">
      <LastArticles/>
      <Sidebar/>
    </div>
    <div class="clearfix"></div>
    <Footer/>
  </div>
</template>



<script>
import Header from './components/shared/Header.vue';
import Slider from './components/shared/Slider.vue';
import Sidebar from './components/shared/Sidebar.vue';
import LastArticles from './components/LastArticles.vue';
import Footer from './components/shared/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Slider,
    Sidebar,
    LastArticles,
    Footer
  }
}
</script>




<style>
@import './assets/css/style.css';
</style>
