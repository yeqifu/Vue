<template>
    <div class="todo-container">
    <div class="todo-wrap">
      <!--使用组件标签-->
      <TodoHeader/>   <!--必须闭合-->
      <TodoList/>
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
    name:'#app',
    //映射为标签
    components:{
      TodoHeader,
      TodoList,
      TodoFooter
    }
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