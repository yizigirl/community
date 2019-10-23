<template>
  <div class="head">
    <h1 class="header">后台管理系统</h1>
    <p>
      <span>{{userName}}</span>
      <el-button type="primary" plain @click="logout">退出登录</el-button>
    </p>
  </div>
</template>

<script>
import API from "../../common/js/API";
export default {
  data() {
    return {
      userName: ""
    };
  },
  mounted() {
    this.userName = sessionStorage.getItem("userName");
  },
  methods: {
    logout() {
      this.axios({
        url: API.exit
      })
        .then(res => {
          if(res.data.isok){
              sessionStorage.clear();
              this.$router.replace('/login');
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/index';

.head {
  padding: 20px;
  box-sizing: border-box;
  background: $second;
}

.header {
  font-size: 40px;
  line-height: 80px;
  color: $font;
}
p{
    padding-right 30px
    float right
}
p span{
    margin-right 20px
    color $font
    font-size 25px
}
</style>