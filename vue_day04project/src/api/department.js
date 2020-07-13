//引入封装的request
import request from '@/utils/request'
const group_name = 'department'
//创建一个对象，用于封装请求api
let data = {
  getDepartmentList(){
    //返回一个request
    return new request({
      url:'/${group_name}/departmentList',
      method:'get'
    })
  }
}
//导出
export default data