import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import user from './modules/user'
import base from './modules/base'

const store = new Vuex.Store({
  modules:{
    user,
    base
  }
})
export default store