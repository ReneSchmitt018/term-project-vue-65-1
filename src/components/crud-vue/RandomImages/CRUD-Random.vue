<script lang="ts">
    import { defineComponent } from 'vue'
    import axios from 'axios';
    import Modal from './Random-Modal-Edit.vue';
    import ModalADD from './Random-Modal-Add.vue';
    export default defineComponent({
    components: { Modal,ModalADD }, /* Import Modal.vue */
    data() {
        return {
            randomsimages: [],
            form: {
                title: "",
                image: "",
                url: "",
            },
            submitted: false,
            modalId: 0,
            showEdit: false,
            showAdd: false
        };
    },
    methods: {
        submit() { /* Add item [POST METHOD] */
            axios.post("http://localhost:8000/api/randomsimages", this.form).then(response => {
              this.form = { title: "",image: "",url: "",};
              axios
                    .get("http://localhost:8000/api/randomsimages")
                    .then(response => (this.randomsimages = response.data));
              console.log(response.data);
            }).catch(error => console.log(error));
        },
        handleShowEdit(id:number) { /* EDIT Item [EDIT METHOD] */
  
            this.modalId = id;
            this.showEdit = true;
        }, 
        handleShowAdd() { /* EDIT Item [EDIT METHOD] */
            this.showAdd = true;
            console.log(this.showAdd)
}, 
  
        deleterandomsimages(id:number) { /* Delete item [DELETE METHOD] */
            axios.delete(`http://localhost:8000/api/randomsimages/${id}`)
                .then(response => {
                axios
                    .get("http://localhost:8000/api/randomsimages")
                    .then(response => (this.randomsimages = response.data));
                console.log(response.data);
            })
                .catch(e => {
                console.log(e);
            });
        },
  
        handleExitModal(value:boolean){
        this.showEdit=value;
        this.showAdd=value;
        axios
            .get("http://localhost:8000/api/randomsimages")
            .then(response => (this.randomsimages = response.data));
        console.log(this.randomsimages);
        this.modalId = 0;
        this.showEdit = false;
    },
        
    },
    mounted() { /* List item [GET METHOD] */
        axios
            .get("http://localhost:8000/api/randomsimages")
            .then(response => (this.randomsimages = response.data));
        console.log(this.randomsimages);
        this.modalId = 0;
        this.showEdit = false;
    },
    
  });
    </script>
  <template>
  
  <section class="container mx-auto mt-20">
       <div class="inline-block flex flex-row">
          <p class="text-gray-700 dark:text-white py-2 px-2 text-3xl"> CRUD : Randoms Images Information-URI</p>
          <button @click="handleShowAdd()"><p class="underline text-gray-700 dark:text-white py-4 text-sm">add item</p></button>
       </div>
  <div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Titie
                </th>
                <th scope="col" class="py-3 px-6 center">
                    Image
                </th>
                <th scope="col" class="py-3 px-6">
                    URL
                </th>
                <th scope="col" class="py-3 px-6">
                    Created_at
                </th>
                <th scope="col" class="py-3 px-6">
                    Updated_at
                </th>
                <th scope="col" class="py-3 px-6">
                    EDIT
                </th>
                <th scope="col" class="py-3 px-6">
                    DELETE
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="randomsimage in randomsimages" :key="randomsimage.id">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{randomsimage.title}}
                </th>
                <td class="py-4 px-6 center">
                <img :src="randomsimage.image" alt="">
                </td>
                <td class="py-4 px-6">
                    <a :href="randomsimage.url" target="_blank" rel="noopener noreferrer">{{randomsimage.url}}</a>
                </td>
                <td class="py-4 px-6">
                  {{randomsimage.created_at}}
                </td>
                <td class="py-4 px-6">
                  {{randomsimage.updated_at}}
                </td>
                <td class="py4 py6">
                    <button class="underline block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" @click="handleShowEdit(randomsimage.id)"> 
                Edit
                </button>
                </td>
                <td class="py4 py6">
                    <button class="underline block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" @click="deleterandomsimages(randomsimage.id)"> 
                Delete
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
    </section>
   
  
    
    <div v-for="i in data" class="mt-2">
   <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" @click="handleShowEdit(i)">
    {{i}}
    </button>
    </div>
    <div v-if="showEdit">
     <Modal :modalId="modalId" @modal="handleExitModal"/>
    </div>
    <div v-if="showAdd">
     <ModalADD  @modal="handleExitModal"/>
    </div>
  
  
  
  </template>