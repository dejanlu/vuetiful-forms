import axios from 'axios'

export const state = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    website: '',
    role: ''
  }
}

export const mutations = {
  updateUser (state, user) {
    state.user = user
  }
}

export const actions = {
  async getLoggedInUser (context) {
    const response = await axios.get('http://localhost:3000/user')
    context.commit('updateUser', response.data)
  },
  updateUserData (context, payload) {
    const userCopy = { ...context.state.user }
    userCopy[payload.prop] = payload.value
    context.commit('updateUser', userCopy)
  }
}

export const getters = {}
