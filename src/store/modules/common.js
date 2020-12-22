
const state = {
    keepaliveList: []
  }
  const mutations = {
    setKeepaliveList(state, val) {
      if (state.keepaliveList.indexOf(val) < 0) {
        state.keepaliveList.push(val)
      }
    },
    removeKeepaliveList(state, val) {
      let index = state.keepaliveList.indexOf(val)
      if (index >= 0) {
        state.keepaliveList.splice(index, 1)
      }
    },
    cleanKeepaliveList(state) {
      state.keepaliveList = []
    }
  }
  const actions = {
    cleanKeepList(context) { 
      context.commit('cleanKeepaliveList');
    },
    addKeepList(context, val) {  
      context.commit('setKeepaliveList', val)
    }
  }
  const getters = {
    getKeepList() { 
      return state.keepaliveList
    }
  }
  
  export default {
    state,
    getters,
    mutations,
    actions
  }
  