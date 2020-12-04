export const state = () => ({
  addTodoVisibility: false,
})

export const mutations = {
  open(state) {
    state.addTodoVisibility = true
  },
  close(state) {
    state.addTodoVisibility = false
  }
}