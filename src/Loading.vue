<script lang="ts">
  import { defineComponent } from 'vue'
  import axios from 'axios';
  
  export default defineComponent({
  components: {}, 
  data() {
      return {
        randomsindex: [],
      };
  },
  mounted() { /* List item [GET METHOD] */
      axios
          .get("http://localhost:8000/api/randomsindex")
          .then(response => (this.randomsindex = response.data));
      console.log(this.randomsindex);
  },
  
});


  </script>

<template>
<div id="loadertimeout"> 
    <div class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden dark:bg-gray-700 bg-white opacity-100 flex flex-col items-center justify-center dark:text-white text-gray-800">
	    <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
	    <h2 class="text-center text-xl font-semibold">Loading...</h2>
	    <p class="w-1/3 text-center">This may take a few seconds, please don't close this page.</p>
    </div>
    <!-- Loop Loading Image STATUS : USED 
    
    -->
    <div class="fixed top-1/2 left-4/5 right-0 bottom-0 z-50 items-center justify-center" v-for="randomsindexs in randomsindex" :key="randomsindexs.id">
      <img class="rounded-2xl" :src="randomsindexs.image" alt="">
    </div>
  </div>
</template>

<style scoped>

</style>
