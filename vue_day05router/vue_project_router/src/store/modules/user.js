const user = {
  state: {
    studentList: [
      {id: 3, name: '张三', age: 23},
      {id: 4, name: '李四', age: 24},
      {id: 5, name: '王五', age: 25},
      {id: 6, name: '赵六', age: 26}
    ],
    token: '',
    name: '',
    header: ''
  },
  getters: {
    getStudentByAge(state) {
      return state.studentList.filter(e => e.age > 24)
    }
  }
}

export default user