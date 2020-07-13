const base = {
  state: {
    count: 0,
  },
  mutations: {
    increment(state, n) {
      state.count += n
    },
    decrement(state) {
      state.count--
    }
  },
  actions: {
    decrement(context) {
      console.log(context)
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit('decrement')
          resolve()
        }, 1000)
      })
    }
  }
}

export default base