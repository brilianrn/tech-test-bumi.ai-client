import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photos: [],
    photo: {}
  },
  mutations: {
    SET_PHOTOS (state, payload) {
      state.photos = payload
    },
    SET_PHOTO (state, payload) {
      state.photo = payload
    }
  },
  actions: {
    setPhotosAsync (context, _) {
      axios({
        url: '/photos',
        method: 'GET'
      }).then(({ data }) => {
        context.commit('SET_PHOTOS', data)
      }).catch(err => {
        console.log(err)
      })
    },
    setPhotoAsync (context, payload) {
      axios({
        url: `/photos/${+payload}`,
        method: 'GET'
      }).then(({ data }) => {
        context.commit('SET_PHOTO', data)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
