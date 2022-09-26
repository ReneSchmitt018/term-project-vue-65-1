
/* --------- Create Vue Web Application ---------------------- */

import { createApp } from 'vue'
import App from './App.vue'

/* ----------------------------------------------------------- */

/* --------- Tailwind CSS + Flowbite + Global CSS------------- */

import './index.css'
import './style.css'
import 'flowbite'

/* ----------------------------------------------------------- */

/* ----------Swiper JS--------------------------------------- */

  // import Swiper JS
  import Swiper from 'swiper';
  // import Swiper styles
  import 'swiper/css';

/* ----------------------------------------------------------- */

/* --------- Vue Router -------------------------------------- */

import router from './router'
createApp(App).use(router).mount('#app')

/* ----------------------------------------------------------- */

/* -------------- Toggle Darkmode ---------------------------- */

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon?.classList.remove('hidden');
} else {
    themeToggleDarkIcon?.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn?.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon?.classList.toggle('hidden');
    themeToggleLightIcon?.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});

/* -------------- Loader CSS ----------------------------------------------------------------------------------- */

const loader = setTimeout(loadertimeout, 3000);
function loadertimeout() {
document.getElementById("loadertimeout").innerHTML = ""
}

/* --------- BUG :: Object 'null' in TS Writing / STATUS :: NOT_AFFECT_RESULT / USAGE :: OK  ------------------- */


