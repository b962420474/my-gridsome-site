// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/index.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.mixin({
    data(){
      return {
        GRIDSOME_API:process.env.GRIDSOME_API
      }
    }
  })
  Vue.component('Layout', DefaultLayout)
}
