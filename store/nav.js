export const state = () => ({
  toggleSidebar: true
})

export const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.toggleSidebar = !state.toggleSidebar
  }
}

export const actions = {
  toggleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  }
}

export const getters = {
  toggleSidebar: state => state.toggleSidebar
}

