import { createStore } from 'vuex'
import user from './user-OLD'

export const store = createStore({
  modules: {
    user,
  },
})

// src/store/index.js
// import Vue from 'vue'
// import Vuex from 'vuex'
// import { createStore } from 'vuex'
// import { FeathersVuex } from '../feathers-client'
// import auth from './store.auth'
// import userServicePlugin from '../store/services/users'

// Vue.use(Vuex)
// Vue.use(FeathersVuex)

// const requireModule = require.context(
//   // The path where the service modules live
//   './services',
//   // Whether to look in subfolders
//   false,
//   // Only include .js files (prevents duplicate imports`)
//   /\.js$/
// )
// const servicePlugins = requireModule
//   .keys()
//   .map((modulePath) => requireModule(modulePath).default)

// export const store = createStore({
//   state: {},
//   mutations: {},
//   actions: {},
//   plugins: [userServicePlugin, auth],
// })

// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {},
//   plugins: [...servicePlugins, auth]
// })
