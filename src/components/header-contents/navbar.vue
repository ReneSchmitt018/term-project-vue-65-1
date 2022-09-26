<script lang="ts">
    import { defineComponent, DefineComponent } from 'vue';
    export default defineComponent({
        
    })
</script>

<template>
     <!----------------------------------------------------------------- Navbar ------------------------------------------------------------------------> 
  <nav class="px-4 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed w-full z-20 top-0 left-0">
  <div class="flex flex-wrap justify-between items-center min-w-fit mx-auto container ">
    <a href="/" class="flex items-center">
        <img src="https://i.imgur.com/IzlK3pZ.png" class="mr-3 h-6 sm:h-10 rounded-lg" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Archive Development LTC.</span>
    </a>
    <button data-collapse-toggle="mobile-menu navbar-sticky" type="button" class="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" aria-controls="mobile-menu-2" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="mobile-menu navbar-sticky">
      <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <router-link to="/archive_blog" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Dev Blog</router-link>
        </li>
        <li>
          <router-link to="/archive_updates" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Updates Archive</router-link>
        </li>
        <li>
          <router-link to="/archive_faq" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">FAQ</router-link>
        </li>
        <li>
          <router-link to="/archive_forum" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Forums</router-link>
        </li>
        <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Main Menu <svg class="ml-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
            <!-- Dropdown menu -->
            <div id="dropdownNavbar" class="hidden z-10 h-144 w-60 font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 overflow-y-scroll">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <div class="py-1">
                    <p class="block text-gray-700 dark:text-gray-100 text-md py-2 px-3">My Stuff</p>
                  </div>
                  <li>
                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>     
                </ul>
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-400">
                  <div class="py-1">
                    <p class="block text-md dark:text-gray-100 py-2 px-3">View Options</p>
                  </div>             
                  <li>
                  <div class="block py-2 px-2 flex items-center">
                  <button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                  <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                  <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                  </button>
                  <span class="ml-1 text-sm font-medium text-gray-900 dark:text-gray-100">Dark Mode</span>
                  </div>

                  </li>
                </ul>
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-400">
                  <div class="py-1">
                    <p class="block text-md dark:text-gray-100 py-2 px-3">Community Forums</p>
                  </div>
                  <li>
                    <router-link to="/gd/" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">General Discussion</router-link>
                  </li>
                  <li>
                    <router-link to="/i/" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ideas</router-link>
                  </li>
                  <li>
                    <router-link to="/s/" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Stories</router-link>
                  </li>
                  <li>
                    <router-link to="/m/" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mods</router-link>
                  </li>
                  <li>
                    <router-link to="/v/" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Videos</router-link>
                  </li>
                  <li>
                    <router-link to="/cr/" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Creative Rewards</router-link>
                  </li>
                  <li>
                    <router-link to="/sp/" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Support</router-link>
                  </li>
                  <li>
                    <router-link to="/b/" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bugs / Mod Bugs</router-link>
                  </li>
                  <li>
                    <router-link to="/o/" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Off-Topic</router-link>
                  </li>
                </ul>
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-400">
                  <div class="py-1">
                    <p class="block text-md dark:text-gray-100 py-2 px-3">Policies & User Agreements</p>
                  </div>
                  <li>
                    <router-link to="/archive_user" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">User & Agreements</router-link>
                  </li>
                  <li>
                    <router-link to="/archive_policy" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Term & Policies</router-link>
                  </li>
                  <li>
                    <router-link to="/archive_dev" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About Dev.</router-link>
                  </li>
                </ul>
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-400">
                  <div class="py-1">
                    <p class="block text-md dark:text-gray-100 py-2 px-3">CRUD & Information </p>
                  </div>
                  <li>
                    <router-link to="/c/boards" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">CRUD - Boards</router-link>
                  </li>
                  <li>
                    <router-link to="/c/threads" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">CRUD - Threads</router-link>
                  </li>
                  <li>
                    <router-link to="/c/threadsdetails" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">CRUD - SubThreads </router-link>
                  </li>
                  <li>
                    <router-link to="/c/random_images" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">CRUD - Random Images</router-link>
                  </li>
                  <li>
                    <router-link to="/c/archive_updates" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">CRUD - Update Archives</router-link>
                  </li>

                </ul>
                
                <div class="py-1">
                  <a href="#" class="block py-3 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Log out</a>
                  <span class="block py-2 px-4 text-xs text-gray-400 dark:text-gray-400">© 2022 Archive Development LTC. All Rights Reserved.
                </span>

            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <!------------------------------------------------------------------------------------------------------------------------------------------------> 
</template>