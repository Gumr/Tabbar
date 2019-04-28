import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tabbarShow:true
  },
  getters:{
    getTabbarShow(state){
        return state.tabbarShow
    }
  },
  mutations: {
    updateTabbarShow(state, payload){
      state.tabbarShow = payload
    }
  },
  actions: {}
});
export default store;