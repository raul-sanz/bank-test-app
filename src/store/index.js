import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import data from './data'

Vue.use(Vuex)

const vuexLocal = new VuexPersist({
  storage: window.localStorage,
  key: 'vuex_data'
})

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      data
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV,
    plugins:[vuexLocal.plugin]
  })

  return Store
}
