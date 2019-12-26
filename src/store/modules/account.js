
export default {
  namespaced: true,
  state: {
    isLogin: false,
    user: {
      name: '张三',
      age: 19
    },
    todos: [
      { id: 1, done: true },
      { id: 2, done: false }
    ]
  },
  getters: {
    doneTodos: state => state.todos.filter(todo => todo.done)
  },
  mutations: {
    setUser(state, value) {
      state.user = value
    }
  },
  actions: {

  }
}
