<script lang="ts">
    import axios from 'axios';
    export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
        return {
          updatesindex: [],
        };
    },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  mounted() { /* List item [GET METHOD] */
        axios
            .get("http://localhost:8000/api/updatesindex")
            .then(response => (this.updatesindex = response.data));
        console.log(this.updatesindex);
    },
};

// Import Swiper Vue.js components

import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

</script>

<template>
<!-------------------------------------------------------------- Body Content --------------------------------------------------------------------> 

  <!-- Content Poster -->
  <section class="bg-25 w-full h-screen">
     <div class="sticky top-shiroko dark:text-white text-white">
         <p class="text-center text-2xl p-5"> Released on Mobile Platforms. Download Now!</p>
         <ul class="flex justify-center space-x-6 p-2">
         <li ><a href="https://apps.apple.com/us/app/blue-archive/id1571873795" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/UxChxcY.png" alt="" srcset=""></a> </li>
         <li ><a href="https://play.google.com/store/apps/details?id=com.nexon.bluearchive&hl=th&gl=US" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/iPw7b4N.png" alt="" srcset=""></a> </li>
         <li ><a href="https://www.bluestacks.com/th/index.html" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/GF7JTBF.png" alt="" srcset=""></a> </li>
         </ul>
     </div>
  </section>
  <section class="bg-26 flex flex-col w-full h-updated shadow-lg shadow-cyan-500/50">
    <div class="updated">
      <h3 data-aos="fade-right" class="text-white dark:text-white">
       Archive Updated & PV
      </h3>
    </div>
    <!-- -->
    <section data-aos="fade-right">
    <div class="container_updated" > 
    <swiper
    :pagination="{
      dynamicBullets: true,
    }"
    :modules="modules"
    class="mySwiper" 
  >
    <swiper-slide><a href="https://www.youtube.com/watch?v=rFeBMv98X30" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/keWeoJc.png" alt="" ></a></swiper-slide>
    <swiper-slide><a href="https://www.youtube.com/watch?v=cE1ePjq5ZSs" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/EM27JLF.png" alt="" ></a></swiper-slide>
    <swiper-slide><a href="https://www.youtube.com/watch?v=8TVPcRafH10" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/e3YDJ92.png" alt="" ></a></swiper-slide>
    <swiper-slide><a href="https://www.youtube.com/watch?v=hUD0W8K9ayk" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/n5DHS0Q.png" alt="" ></a></swiper-slide>
    <swiper-slide><a href="https://www.youtube.com/watch?v=2SuIPy23ajY" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/W9bVkQs.png" alt="" ></a></swiper-slide>
    <swiper-slide><a href="https://www.youtube.com/watch?v=0KFPtliRn_4" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/jCWcam3.png" alt="" ></a></swiper-slide>
    </swiper>
    <div class="container_news_updated ">
      <ul class="container_news_updated_tablist">
        <li class="container_news_updated_tabitem container_news_updated_tabitem--active">Latest Archive Updated</li>
      </ul>
      <ul class="container_news_updated_updatedlist" v-for="updatesindexs in updatesindex" :key="updatesindexs.id">
        <li class="container_news_updated_updatedlist_news_item"><a :href="updatesindexs.url" target="_blank" rel="noopener noreferrer">      
        <p class="container_news_updated_updatedlist_news_title truncate">{{updatesindexs.title}}</p></a>
        <p class="container_news_updated_updatedlist_news_date ">{{updatesindexs.created_at}}</p></li> 
      </ul> 
      <router-link to="/archive_updates" class="container_news_updated_updatedlist_news_more" target="_blank" rel="noopener noreferrer"> More updated..</router-link>
    </div>
    </div>
  </section>
  </section>

<ul class="mx-auto">
  <li class="mt-5"><div class="bg-abydos  w-screen h-64 flex items-center justify-center" alt="Abydos">
    <a href="https://bluearchive.fandom.com/wiki/Abydos_High_School" target="_blank" rel="noopener noreferrer"><p data-aos="fade-left" class=" dark:hover:text-gray-300 dark:text-white text-white"> Abydos High School </p></a>
  </div>
  </li>
  <li class="mt-5"> <div class="bg-gehenna w-screen h-64 flex items-center justify-center" alt="Gehenna">
    <a href="https://bluearchive.fandom.com/wiki/Gehenna_Academy" target="_blank" rel="noopener noreferrer"><p data-aos="fade-left" class="text-center dark:hover:text-gray-300 dark:text-white text-white"> Gehenna Academy </p></a>
  </div>
  </li>
  <li class="mt-5">
    <div class="bg-millennium w-screen h-64 flex items-center justify-center" alt="Millennium">
    <a href="https://bluearchive.fandom.com/wiki/Millennium_Science_School" target="_blank" rel="noopener noreferrer"><p data-aos="fade-left" class="text-center dark:hover:text-gray-300 dark:text-white text-white"> Millennium Science School </p></a>
  </div>
</li >
  <li class="mt-5">
    <div class="bg-trinity w-screen h-64 flex items-center justify-center" alt="Trinity">
    <a href="https://bluearchive.fandom.com/wiki/Trinity_General_School" target="_blank" rel="noopener noreferrer"><p data-aos="fade-left" class="text-center dark:hover:text-gray-300 dark:text-white text-white"> Trinity General School </p></a>
  </div>
</li>
  <li class="mt-5">
  <div class="bg-hyakkiyako w-screen h-64 flex items-center justify-center" alt="Hyakkiyako">
    <a href="https://bluearchive.fandom.com/wiki/Hyakkiyako_Alliance_Academy" target="_blank" rel="noopener noreferrer"><p data-aos="fade-left" class="text-center dark:hover:text-gray-300 dark:text-white text-white"> Hyakkiyako Alliance Academy </p></a>
  </div>
</li>
  <li class="mt-5">
    <div class="bg-shanhaijing w-screen h-64 flex items-center justify-center" alt="Shanhaijing">
    <a href="https://bluearchive.fandom.com/wiki/Shanhaijing_Senior_Secondary_School" target="_blank" rel="noopener noreferrer"><p data-aos="fade-left" class="text-center dark:hover:text-gray-300 dark:text-white text-white"> Shanhaijing Senior School </p></a>
  </div>
</li>
  <li class="mt-5">
    <div class="bg-redwinter w-screen h-64 flex items-center justify-center" alt="Red Winter">
    <a href="https://bluearchive.fandom.com/wiki/Red_Winter_Federal_Academy" target="_blank" rel="noopener noreferrer"><p data-aos="fade-left" class="text-center dark:hover:text-gray-300 dark:text-white text-white"> Red Winter Federal Academy </p></a>
  </div>
</li>
  <li class="mt-5">
    <div class="bg-valkyrie w-screen h-64 flex items-center justify-center" alt="Valkyrie">
    <a href="https://bluearchive.fandom.com/wiki/Valkyrie_Police_Academy" target="_blank" rel="noopener noreferrer"><p data-aos="fade-left" class="text-center dark:hover:text-gray-300 dark:text-white text-white"> Valkyrie Police Academy </p></a>
  </div>
</li>
  <li class="mt-5">
    <div class="bg-arius w-screen h-64 flex items-center justify-center" alt="Arius">
    <a href="https://bluearchive.fandom.com/wiki/Arius_Branch_School" target="_blank" rel="noopener noreferrer"><p data-aos="fade-left" class="text-center dark:hover:text-gray-300 dark:text-white text-white"> Arius Branch School </p></a>
  </div>
</li>
  <li class="mt-5">
  <div class="bg-srtspeical w-screen h-64 flex items-center justify-center" alt="SRT Special">
    <a href="https://bluearchive.fandom.com/wiki/SRT_Special_Academy" target="_blank" rel="noopener noreferrer"><p data-aos="fade-left" class="text-center dark:hover:text-gray-300 dark:text-white text-white"> SRT Special Academy </p></a>
  </div>
</li>
<li class="mt-5 mb-5">
  <div class="w-screen h-64 flex items-center justify-center border-dashed border-2 border-sky-500" alt="Coming Soon">
    <p data-aos="fade-left" class="text-center text-3xl dark:text-white text-gray-800"> Coming Soon !</p>
  </div>
</li>
</ul>
<button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
    <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
    <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
</button>

<!-----------------------------------------------------------------------------------------------------------------------------------------------> 
</template>