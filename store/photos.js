export const state = () => ({
  list: []
})

export const mutations = {
  add (state, photos) {
    state.list.concat(photos);
  },
}

export const getters = {
  photos: state => state.list
}
