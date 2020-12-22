import {
  BOOKING_USER_AUTH,
  BOOKING_USER_PRIVILEGES,
  BOOKING_USER_PRIVILEGE_AUTH,
  BOOKING_USER_CURRENT_STORE,
  BOOKING_USER_ORG_LIST,
  BOOKING_USER_DISTRIBUTIONS,
  BOOKING_USER_STORES,
  BOOKING_USER_PIECES,
  BOOKING_USER_PIECES_BY_DISTRIBUTE,
  BOOKING_CONFIGS,
  CURRENT_DISTRIBUTE
} from '@/constants'

const loopStores = (categories, type) => {
  let result = []
  if (!categories) return result
  for (let i = 0, count = categories.length; i < count; i++) {
    const category = Object.assign({}, categories[i])

    if (category.type === type) {
      delete category.children
      result.push(category)
    } else if (category.children.length) {
      result = result.concat(loopStores(category.children, type))
    }
  }

  return result
}

const state = {
  user: {},
  currentStore: {},
  currentDistribute: '',
  orgList: {},
  configs: {}
}
const mutations = {
  [BOOKING_USER_AUTH](state, user) {
    state.user = user
  },
  [BOOKING_USER_CURRENT_STORE](state, currentStore) {
    state.currentStore = currentStore
  },
  [BOOKING_USER_ORG_LIST](state, orgList) {
    state.orgList = orgList
  },

  [BOOKING_CONFIGS.ALL](state, configs) {
    state.configs = configs
  },
  [CURRENT_DISTRIBUTE]: state => {
    return state.currentDistribute
  }
}

const actions = {
  [BOOKING_USER_AUTH]({ commit }, user) {
    commit(BOOKING_USER_AUTH, user)
  },
  [BOOKING_USER_CURRENT_STORE]({ commit }, currentStore) {
    commit(BOOKING_USER_CURRENT_STORE, currentStore)
  },
  [BOOKING_USER_ORG_LIST]({ commit }, orgList) {
    commit(BOOKING_USER_ORG_LIST, orgList)
  },
  [BOOKING_CONFIGS.ALL]({ commit }, configs) {
    commit(BOOKING_CONFIGS.ALL, configs)
  },
  [CURRENT_DISTRIBUTE]({ commit }, currentDistribute) {
    commit(CURRENT_DISTRIBUTE, currentDistribute)
  }
}

const getters = {
  [BOOKING_USER_AUTH]: state => state.user,
  [BOOKING_USER_PRIVILEGES]: state => {
    return state.user.privileges
  },
  [BOOKING_USER_PRIVILEGE_AUTH]: state => (type) => {
    const { user: { privileges = {} } } = state

    return privileges[type]
  },
  [BOOKING_USER_CURRENT_STORE]: state => {
    return state.currentStore
  },
  [BOOKING_USER_DISTRIBUTIONS]: state => {
    const { orgList: { stores } } = state
    return loopStores(stores, 'distribution').sort((a, b) => a.code - b.code)
  },
  [BOOKING_USER_STORES]: state => {
    try {
      const { orgList: { stores } } = state
      return loopStores(stores, 'store').sort((a, b) => a.code - b.code)
    } catch (error) {
      console.log('BOOKING_USER_STORES Error: ', error)
      return []
    }
  },
  [BOOKING_USER_PIECES]: state => {
    try {
      const { orgList: { stores } } = state
      return loopStores(stores, 'piece')
    } catch (error) {
      console.log('BOOKING_USER_PIECES Error: ', error)
      return []
    }
  },
  [BOOKING_USER_PIECES_BY_DISTRIBUTE]: state => (distributeCode) => {
    try {
      const { orgList: { stores } } = state

      const [result] = stores.filter(store => store.code === distributeCode)

      return result ? result.children : []
    } catch (error) {
      console.log('BOOKING_USER_PIECES Error: ', error)
      return []
    }
  },
  [BOOKING_CONFIGS.ALL]: state => (category, type, index) => {
    try {
      const { configs } = state
      if (!configs) {
        return ''
      }
      if (!configs[category]) {
        return ''
      }
      if (type === undefined) {
        if (configs[category].types) {
          return configs[category].types
        } else {
          return configs[category]
        }
      } else if (!configs[category][type]) {
        return ''
      }
      if (index === undefined) {
        return configs[category][type]
      }
      if (index === 'all') {
        return configs[category][type].types
      }

      return configs[category][type].types[index]
    } catch (error) {
      console.log('GetEnumAllocationType Error: ', error)
    }
  },
  [CURRENT_DISTRIBUTE]: state => {
    return state.currentDistribute
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
