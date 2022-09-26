<script>
    import {defineComponent} from 'vue'
    import axios from 'axios';
    export default defineComponent({
        data() {
      return {
          boards: ['name','descript'],
      };
     },  
      methods:{
        handleExitModal(){
        this.$emit('modal',false);
      },editboards() { /* PUT item [PUT METHOD] */
        var data={
            name:this.boards.name,
            descript:this.boards.descript,
        }
          axios.put(`http://localhost:8000/api/boards/${this.modalId}`,data).then(response=>{console.log(response.data);
        this.$emit('modal',false);})
              .catch(e => {
              console.log(e);
          });
      },
      },
      
      props:['modalId'],
      mounted() { /* List item [GET METHOD] */
      axios
          .get(`http://localhost:8000/api/boards/${this.modalId}`)
          .then(response => (this.boards = response.data));
      console.log(this.boards);
      
  },
  }
    ) 
  </script>
  <template>
     <div class="fixed flex flex-row justify-center items-center bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 w-full md:inset-0 h-modal md:h-full"  tabindex="-1" aria-hidden="true">
      <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Updatad Boards Information
                </h3>
                <button type="button"  @click="handleExitModal()" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="py-6 px-6 lg:px-8">
                <h4 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">Insert the new Information below.. </h4>
                <form class="space-y-6" action="#">
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Initial name </label>
                        <input type="text" v-model="boards.name" name="name" id="name"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                    </div>
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full Name</label>
                        <input type="text" v-model="boards.descript" name="descript" id="descript"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                    </div>

                </form>
            </div>
            <!-- Modal footer -->
            <div class="flex justify-between p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button @click="editboards()" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Updated</button>
                <button  @click="handleExitModal()" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
            </div>
        </div>
    </div>
  </div>
  </template>