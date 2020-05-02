<template>

  <li @mouseenter="handerEnter(true)" @mouseleave="handerEnter(false)" :style="{background:bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" style="display:none" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
  export default {
    //接收TodoList传过来的数据
    props:{   //指定属性名和属性值的类型
      todo:Object,
      index:Number,
      deleteTodo:Function
    },
    data() {
      return {
        bgColor:'white',
        isShow:false
      }
    },
    methods: {
      handerEnter(isEnter){
        if(isEnter){  //进入
          this.bgColor='#cccccc',
          this.isShow=true
        }else{  //离开
          this.bgColor='white'
          this.isShow=false
        }
      },
      deleteItem(){
        const {todo,index,deleteTodo} = this
        if(window.confirm(`你确定要删除${todo.title}吗？`)){
          //调用函数更新
          deleteTodo(index)
        }
      }
    },
  }
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>