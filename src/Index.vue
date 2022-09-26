<script setup lang="ts">

    import loader from './Loading.vue';
    </script>
    
    <template>
      <!-------------------- Loading Screen --------------------->
      <loader />
      <!----------------- Page Content :: START ----------------->
      <router-view />
      <!----------------- Page Content :: END ------------------->
    </template>
    <style scoped>
    </style>