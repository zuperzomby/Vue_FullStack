import Vue from "vue";
import AppLayout from './theme/template.vue'
import router from './router.js'

const app = new Vue({
  //property of app-template will spread into json
  router,
  ...AppLayout
})

export {app, router};
