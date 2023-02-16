import { createStore } from 'vuex'

export default createStore({
  state: {
    authStatus: localStorage.getItem('authStatus'),
    users: []
  },
  getters: {
  },
  mutations: {
    addUser(state, payload) {
      state.users.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
