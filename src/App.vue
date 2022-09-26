<script setup lang="ts">

  import { defineComponent } from 'vue'

  import Index from './Index.vue';
  import Navbar from './components/header-contents/navbar.vue';
  import Footer from './components/footer-contents/footer.vue';
  </script>
  
  <template>

    <!----------------- Page Content :: START ----------------->
    <Navbar />
    <Index />
    <Footer />
    <!----------------- Page Content :: END ------------------->
  </template>
  <style scoped>
  </style>