<template>
    <div class="todo-container">
    <div class="todo-wrap">
      <!--使用组件标签-->
      <TodoHeader :addTodo="addTodo"/>   <!--必须闭合-->
      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter/>
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
        todos:[
          {title:'吃饭',complete:'true'},
          {title:'睡觉',complete:'true'},
          {title:'看高数',complete:'true'},
          {title:'看英语',complete:'true'}
        ]
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