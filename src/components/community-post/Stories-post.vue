<script lang="ts">
    import { defineComponent } from 'vue'
    import axios from 'axios';
    export default defineComponent({
    components: {}, 
    data() {
        return {
            stories: [],
        };
    },
    mounted() { /* List item [GET METHOD] */
        axios
            .get("http://localhost:8000/api/d/stories")
            .then(response => (this.stories = response.data));
        console.log(this.stories);
    },
    
  });
    </script>
  <template>
    <div class="inline-block flex flex-row mt-16 container mx-auto">
          <p class="text-gray-700 dark:text-white py-2 px-2 text-3xl"> Stories Threads</p>
          <p class="underline text-gray-700 dark:text-white py-4 text-sm">By ReneRockerz</p>
    </div>
  <section class="container mx-auto px-4 p-6">
    <a target="_blank" rel="noopener noreferrer" class="flex flex-col mt-3 items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-6xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"  v-for="storie in stories" :key="storie.id">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <img class="object-cover w-full h-96 rounded-t-lg md:h-24 md:w-48 md:rounded-none md:rounded-l-lg" :src="storie.image" >
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{storie.name}}</h5>
        <p class="mb-3 font-md text-gray-700 dark:text-gray-400">{{storie.descript}}</p>
    </div>
     </a>
  </section>
  </template>