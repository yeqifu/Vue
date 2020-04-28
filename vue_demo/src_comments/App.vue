<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <!--子组件调用添加评论的方法-->
      <CommentAdd :addComment="addComment"/>
      <CommentList :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script>
  import CommentAdd from './components/CommentAdd.vue'
  import CommentList from './components/CommentList.vue'
  export default {
    data(){
      return{
        comments:[  //数据在那个组件，更新数据的行为（方法）就应该定义在那个组件
          {
            name:'luoyi-',
            content:'戒骄戒躁，稳扎稳打！'
          },
          {
            name:'jiucheng-',
            content:'I love you,Mary.'
          },
          {
            name:'scarlett',
            content:'More today than yesterday?'
          }
        ]
      }
    },
    methods: {
      //添加评论
      addComment(comment){
        //放到数组的第一位
        this.comments.unshift(comment)
      },
      //删除指定下标的评论
      deleteComment(index){
        this.comments.splice(index,1)
      }
    },
    //映射为标签
    components:{
      CommentAdd,
      CommentList
    }
  }
</script>

<style>

</style>