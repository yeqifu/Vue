<template>
  <div id="app">
    <h1>我是App.vue的标题</h1>
    <button @click="toAbout">关于页面</button>
    <router-link to='/home' tag="li">首页</router-link>
    <router-link to='/about'>关于</router-link>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    toAbout(){
      console.log('来到关于页面')
      this.$router.push('/home')
    }
  },
}
</script>
<style scoped>
.router-link-active{
  color: red;
}
</style>