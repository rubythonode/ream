import Vue from 'vue'
import DefaultApp from './App.vue'
import Meta from 'vue-meta'

Vue.use(Meta, {
  keyName: 'head',
  attribute: 'data-rehead',
  ssrAttribute: 'data-rehead-rendered',
  tagIDKeyName: 'rehid'
})

export default ({
  App = DefaultApp,
  store,
  router
} = {}) => {
  if (store) {
    const { sync } = require('vuex-router-sync')
    sync(store, router)
  }

  return new Vue({
    store,
    router,
    created() {
      Vue.prototype.$ream = this
    },
    render: h => h(App)
  })
}
