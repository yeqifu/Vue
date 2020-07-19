const base = {
  state:{
    //部门列表
    departmentList:[]
  },
  mutations:{
    setDepartmentList(state,list){
      state.departmentList=list
    }
  },
  getters:{
    department(state){
      return state.departmentList
    }
  },
  actions:{

  }
}

export default base