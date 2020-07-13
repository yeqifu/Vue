<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">部门管理</el-menu-item>
      <el-menu-item index="2">菜单管理</el-menu-item>
    </el-menu>
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


