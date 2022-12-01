import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalCount: 10,
    isJayHappy: true, 
    isAishHappy: true
  },
  getters: {
    happyStaff: state => {
      return state.isJayHappy && state.isAishHappy
    }
  },
  mutations: {
    removeCount(state, count) {
      state.totalCount -= count
    }
  },
  actions: {
    removeCount(context, count) {
      // If we enough counts, ask Jay to remove it
      if(context.state.totalCount >= count) {
        // If we counts, ask Aish to remove it
        context.commit('removeCount', count)
      }
    }
  }
})
