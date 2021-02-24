import axios from 'axios'
import router from '../router'

export default {
  state: () => ({
    userInfo: null,
    accessToken: null,
  }),
  mutations: {
    ADD_USER_TO_STATE(state, payload) {
      localStorage.setItem('booklist-accessToken', payload.accessToken)
      localStorage.setItem('booklist-user', JSON.stringify(payload.user))
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
          router.push('/')
        })
    },
    checkForLocalUser(context) {
      console.log('CHECKING FOR LOCAL USER')
      const localAccessToken = localStorage.getItem('booklist-accessToken')
      const localUser = localStorage.getItem('booklist-user')
      if (localUser && localAccessToken) {
        context.commit('ADD_USER_TO_STATE', {
          user: localUser,
          accessToken: localAccessToken,
        })
        router.push('/')
      }
    },
  },
  getters: {},
}
