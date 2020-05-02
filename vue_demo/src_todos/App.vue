<template>
    <div class="todo-container">
    <div class="todo-wrap">
      <!--使用组件标签-->
      <TodoHeader :addTodo="addTodo"/>   <!--必须闭合-->
      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :todos="todos" :deleteAllTodo="deleteAllTodo" :selectAll="selectAll"/>
    </div>
  </div>
</template>

<script>
  //引入组件
  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'
  export default {
    //映射为标签
    components:{
      TodoHeader,
      TodoList,
      TodoFooter
    },
    data() {
      return {
        //从localStorage读取todos
        todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
      }
    },
    methods: {
      //1.添加代办事项
      addTodo(todo){
        this.todos.unshift(todo)
      },
      //2.删除代办事项
      deleteTodo(index){
        this.todos.splice(index,1)
      },
      //3.删除所有已完成的
      deleteAllTodo(){
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      //4.全选/全不选
      selectAll (isSelectAll) {
        this.todos.forEach(todo => {
          todo.complete = isSelectAll
        })
      }
    },
    //深度监视
    watch: {
      todos:{
        deep:true,  //深度监视
        handler:function(newValue){
          //将todos最新的值的JSON数据，保存到localStorage
          window.localStorage.setItem('todos_key',JSON.stringify(newValue))
        }
      }
    },
  }
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>