import axios from 'axios'

export default {
  state: () => ({
    userInfo: null,
    accessToken: null,
  }),
  mutations: {
    ADD_USER_TO_STATE(state, payload) {
      localStorage.setItem('booklist-accessToken', payload.accessToken)
      localStorage.setItem('booklist-user', payload.user)
      state.userInfo = payload.user
      state.accessToken = payload.accessToken
    },
  },
  actions: {
    getUserInfo(context, { email, pwd }) {
      axios
        .post(`${import.meta.env.VITE_DB_URL}/authentication`, {
          strategy: 'local',
          email: email.value,
          password: pwd.value,
        })
        .then((response) => {
          context.commit('ADD_USER_TO_STATE', response.data)
          context.commit
        })
    },
    checkForLocalUser(context) {
      if (context.state.accessToken && context.state.userInfo) {
      }
    },
  },
  getters: {},
}
