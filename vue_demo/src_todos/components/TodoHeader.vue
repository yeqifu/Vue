<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="addItem"/>
  </div>
</template>

<script>
  export default {
    props:{
      addTodo:{
        type:Function,
        required:true
      }
    },
    data () {
      return {
        title: ''
      }
    },
    methods: {
      addItem(){
        //1.判断输入的内容不能为空
        const title = this.title.trim()
        if(!title){
          alert('输入的代办事项名称不能为空')
          return
        }
        //2.根据输入的数据，封装成一个todo对象
        const todo = {
          title,
          complete:false
        }
        //3.添加的todos中
        this.addTodo(todo)

        //4.重置表单
        this.title=''
      }
    }
  }
</script>

<style>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>