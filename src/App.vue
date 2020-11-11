<template>
  <div id="app">
    <Header/>
    <Slider/>
    <div class="center">
      <!-- <LastArticles/> -->
      <router-view></router-view>
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
import Footer from './components/shared/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Slider,
    Sidebar,    
    Footer
  }
}
</script>




<style>
@import './assets/css/style.css';
</style>
