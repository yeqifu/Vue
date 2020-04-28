import Vue from 'vue'
import App from './App.vue'

new Vue({
  el:'#app',
  //将App映射为标签
  components:{
    App
  },
  //模版中写App标签
  template:'<App/>'
});