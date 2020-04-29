<template>
  <ul class="todo-main">
    <!--使用TodoItem组件标签-->
    <TodoItem v-for="(todo,index) in todos" :todo="todo" :key="index" :index="index" :deleteTodo="deleteTodo"/>
  </ul>
</template>

<script>
  //导入TodoItem组件
  import TodoItem from './TodoItem.vue'
  export default {
    //接收父组件App.vue传过来的数据
    props:{
      todos:Array,
      deleteTodo:Function  
    },
    //将TodoItem映射为标签
    components:{
      TodoItem
    }
  }
</script>

<style>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>