<script lang="ts">
    import { defineComponent } from 'vue'
    import axios from 'axios';
    export default defineComponent({
    components: {}, 
    data() {
        return {
            offtopics: [],
            offtopics_threads:[],
            form: {
                threads_id:"",
                name:"",
                descript:"",
                image:"",
                url:"",
            },
        };
    },
    submitted: false,
    methods:{
      submit() { /* Add item [POST METHOD] */
            axios.post("http://localhost:8000/api/threadsdetails", this.form).then(response => {
              this.form = { threads_id:"",name:"",descript:"",image:"",url:"", };     
              axios
                    .get("http://localhost:8000/api/d/offtopics")
                    .then(response => (this.offtopics = response.data));
              console.log(response.data);
            }).catch(error => console.log(error));
        },
    },
    mounted() { /* List item [GET METHOD] */
        axios
            .get("http://localhost:8000/api/d/offtopics")
            .then(response => (this.offtopics = response.data));
        console.log(this.offtopics);
    },
    async created() {
    // GET request using axios with async/await
    const response = await axios.get("http://127.0.0.1:8000/api/offtopics");
    this.offtopics_threads = response.data;
  },
    
  });
    </script>
  <template>
  
    <section class="container mx-auto px-4 p-6 mt-20 ">
    <a target="_blank" rel="noopener noreferrer" class="flex flex-col mt-3 items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"  v-for="offtopics_thread in offtopics_threads" :key="offtopics_thread.id">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{offtopics_thread.name}}</h5>
        <a :href="offtopics_thread.image" target="_blank" rel="noopener noreferrer"><img class="object-cover w-1/2 h-1/4 hover:w-full rounded-t-lg md:rounded-none md:rounded-l-lg" :src="offtopics_thread.image" ></a> 
        
        <p class="mb-3 mt-3 font-md text-gray-700 dark:text-gray-200">{{offtopics_thread.descript}}</p>
        <p class="font-md text-gray-700 dark:text-gray-400">additional url :{{offtopics_thread.url}}</p>
        <p class="font-md text-gray-700 dark:text-gray-400">created at :{{offtopics_thread.created_at}}</p>
      </div>
     </a>
  </section>
  <div class="inline-block flex flex-row container mx-auto">
          <p class="text-gray-700 dark:text-white py-2 px-2 text-3xl"> Comments</p>
          <p class="underline text-gray-700 dark:text-white py-4 text-sm">Don't forget to read our rules</p>
    </div>
  <section class="container mx-auto px-4 p-6">
    <a  target="_blank" rel="noopener noreferrer" class="flex flex-col mt-1 items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-6xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"  v-for="offtopic in offtopics" :key="offtopic.id">
    <div class="flex flex-col justify-between p-4 leading-normal">
       <a :href="offtopic.image" target="_blank" rel="noopener noreferrer"><img class="object-cover dark:text-white text-left align-middle w-full h-1/4 rounded-t-lg md:h-48 md:w-96 md:rounded-none md:rounded-l-lg" :src="offtopic.image" alt="Oh - No Image Or It's Videos"></a> 
        
       <p class="text-md mt-3 mb-3 text-gray-700 dark:text-gray-200">- {{offtopic.descript}}</p>
       <hr>
        <p class="text-sm mt-1 text-gray-700 dark:text-gray-400">URL Given : {{offtopic.url}}</p>
        <p class="text-sm text-gray-700 dark:text-gray-400">Comment at : {{offtopic.created_at}}</p>
        <p class="text-sm mb-1 text-gray-700 dark:text-gray-400">Username : {{offtopic.name}}</p>
    </div>
     </a>
     
     <section>
      <form class="mt-6" @submit.prevent="submit">
        <div class="mt-3 mb-3">
          <hr>
        </div>
      <div class="inline-block flex flex-row container mx-auto">
          <p class="text-gray-700 dark:text-white text-3xl mb-3 underline"> Comments Sections</p>
    </div>
    <div class="mb-6">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">ID</label>
    <input type="name" id="name"  v-model="form.threads_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required>
  </div>
  <div class="mb-6">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
    <input type="name" id="name"  v-model="form.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required>
  </div>
  <div class="mb-6">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Comments</label>
<textarea id="message" rows="4"  v-model="form.descript" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
  </div>
  <div class="mb-6">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image</label>
    <input type="name" id="name"  v-model="form.image" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Imgur Image [Not Requires!]" >
  </div>
  <div class="mb-6">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">URL</label>
    <input type="name" id="name"  v-model="form.url" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Imgur Image [Not Requires!]" >
  </div>
  
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
<div class="mt-6 mb-3">
          <hr>
        </div>
     </section>
  </section>
  </template>