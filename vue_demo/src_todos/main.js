import App from './App'
import Vue from 'vue'
import './base.css'

new Vue({
  el:'#app',
  //映射为标签
  components:{
    App
  },
  //模版中写App标签
  template:'<App/>'
});

