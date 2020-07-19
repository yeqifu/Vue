<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">
        <!-- 路由跳转 -->
        <router-link to="/department">部门管理</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <!-- 路由跳转 -->
        <router-link to="/userList">用户列表</router-link>
      </el-menu-item>
    </el-menu>
    <!-- 进行展示 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex:"1"
    };
  }
};
</script>
<style scoped>
a{
  text-decoration: none;
}
</style>

