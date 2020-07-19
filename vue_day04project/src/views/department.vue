<template>
  <div>
     <el-table
    :data="departmentList"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="编号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="部门名称"
      width="180">
    </el-table-column>
    
  </el-table>
  </div>
  
</template>

<script>
  import departmentApi from '@/api/department'
  export default {
    name:'department',
    data(){
      return{
        //部门列表
        departmentList:[]
      }
    },
    methods: {
      getDepartmentList(){
        departmentApi.getDepartmentList().then(res=>{
          this.departmentList=res.data
        })
      }
    },
    created() {
      this.getDepartmentList()
    }
  }
</script>

<style>

</style>