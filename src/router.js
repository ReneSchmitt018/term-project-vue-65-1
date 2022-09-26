
import { createWebHistory, createRouter } from "vue-router";

/*-------------------------------------------- Import : CRUD -------------------------------------------- */
import BoardsCRUD from './components/crud-vue/Boards/CRUD-Boards.vue'
import RandomsImagesCRUD from './components/crud-vue/RandomImages/CRUD-Random.vue'
import ThreadsCRUD from './components/crud-vue/Threads/CRUD-Threads.vue'
import ThreadsDetailsCRUD from './components/crud-vue/ThreadsDetails/CRUD-ThreadsDetails.vue'
import UpdatesArchiveCRUD from './components/crud-vue/UpdatesArchive/CRUD-UpdatesArchive.vue'

/*-------------------------------------------- Import : SUB - Content -------------------------------------------- */

import UpdateArchive from './components/UpdatesArchive.vue'
import FAQArchive from './components/subpage-contents/FAQ.vue'
import ConditionArchive from './components/subpage-contents/TermCondition.vue'
import ServiceArchive from './components/subpage-contents/TermPolicy.vue'
import DevArchive from './components/subpage-contents/AboutDev.vue'

/*-------------------------------------------- Import : PAGE - Content -------------------------------------------- */
import BlogArchive from './components/page-contents/Blog.vue'
import ForumsArchive from './components/page-contents/BlogForums.vue'

/*-------------------------------------------- Import : PAGE - Community Content -------------------------------------------- */
import Bugs from './components/community-contents/Bugs.vue'
import Creative from './components/community-contents/Creative.vue'
import Generals from './components/community-contents/Generals.vue'
import Ideas from './components/community-contents/Ideas.vue'
import Mods from './components/community-contents/Mods.vue'
import Offtopics from './components/community-contents/Offtopics.vue'
import Stories from './components/community-contents/Stories.vue'
import Support from './components/community-contents/Support.vue'
import Videos from './components/community-contents/Videos.vue'


/*-------------------------------------------- Import : PAGE - Community Post -------------------------------------------- */

import DetailsBugs from './components/community-Post/bugs-post.vue'
import DetailsCreatives from './components/community-Post/Creative-post.vue'
import DetailsGenerals from './components/community-Post/General-post.vue'
import DetailsIdeas from './components/community-Post/Ideas-post.vue'
import DetailsMods from './components/community-Post/Mods-post.vue'
import DetailsOfftopics from './components/community-Post/Offtopics-post.vue'
import DetailsSupports from './components/community-Post/Support-post.vue'
import DetailsVideos from './components/community-Post/Videos-post.vue'
import DetailsStories from './components/community-Post/Stories-post.vue'

const routes =  [
  {
    path: "/",
    name: "home",
    component: () => import("./components/general-contents/index.vue")
  },
  {
    path: "/c/boards",
    name: "CRUD-Boards",
    component: BoardsCRUD
  },
  {
    path: "/c/threads",
    name: "CRUD-Threads",
    component: ThreadsCRUD
  },
  {
    path: "/c/threadsdetails",
    name: "CRUD-Threads-Details",
    component: ThreadsDetailsCRUD
  },
  {
    path: "/c/archive_updates",
    name: "CRUD-UpdatesArchive",
    component: UpdatesArchiveCRUD
  },
  {
    path: "/c/random_images",
    name: "CRUD-RandomsImages",
    component: RandomsImagesCRUD
  },
  {
    path: "/archive_blog",
    name: "BlogArchive",
    component: BlogArchive
  },
  {
    path: "/archive_updates",
    name: "UpdatesArchive",
    component: UpdateArchive
  },
  {
    path: "/archive_faq",
    name: "FAQ",
    component: FAQArchive
  },
  {
    path: "/archive_user",
    name: "Term&Condition",
    component: ConditionArchive
  },
  {
    path: "/archive_policy",
    name: "Term&Policy",
    component: ServiceArchive
  },
  {
    path: "/archive_dev",
    name: "AboutDev",
    component: DevArchive
  },
  {
    path: "/archive_forum",
    name: "ForumsArchive",
    component: ForumsArchive
  },
  {
    path: "/b/",
    name: "Bugs",
    component: Bugs
  },
  {
    path: "/gd/",
    name: "Generals",
    component: Generals
  },
  {
    path: "/i/",
    name: "Ideas",
    component: Ideas
  },
  {
    path: "/s/",
    name: "Stories",
    component: Stories
  },
  {
    path: "/m/",
    name: "Mods",
    component: Mods
  },
  {
    path: "/v/",
    name: "Videos",
    component: Videos
  },
  {
    path: "/cr/",
    name: "Creative",
    component: Creative
  },
  {
    path: "/sp/",
    name: "Support",
    component: Support
  },
  {
    path: "/o/",
    name: "Offtopics",
    component: Offtopics
  },
  {
    path: "/b/bugs",
    name: "DetailsBugs",
    component: DetailsBugs
  },
  {
    path: "/cr/creatives",
    name: "DetailsCreatives",
    component: DetailsCreatives
  },
  {
    path: "/gd/generals",
    name: "DetailsGenerals",
    component: DetailsGenerals
  },
  {
    path: "/i/ideas",
    name: "DetailsIdeas",
    component: DetailsIdeas
  },
  {
    path: "/m/mods",
    name: "DetailsMods",
    component: DetailsMods
  },
  {
    path: "/v/videos",
    name: "DetailsVideos",
    component: DetailsVideos
  },
  {
    path: "/o/offtopics",
    name: "DetailsOfftopics",
    component: DetailsOfftopics
  },
  {
    path: "/sp/supports",
    name: "DetailsSupports",
    component: DetailsSupports
  },
  {
    path: "/s/stories",
    name: "DetailsStories",
    component: DetailsStories
  },
  



];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;