<template>
  <div class="loginBg">
    <div class="login">
      <h2 class="textPri">登录</h2>
      <el-select class="input" v-model="user.type" placeholder="请选择角色">
        <el-option value="0" label="超级管理员"></el-option>
        <el-option value="1" label="普通管理员"></el-option>
      </el-select>
      <el-input class="input" v-model="user.name" placeholder="请输入账号" clearable></el-input>
      <el-input class="input" placeholder="请输入密码" v-model="user.pass" show-password clearable></el-input>
      <el-button class="input btn" type="primary" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
import API from "../common/js/API";
export default {
  data() {
    return {
      user: {
        type: "",
        name: "",
        pass: ""
      }
    };
  },
  methods: {
    login() {
      this.axios({
        url: API.login,
        method: "post",
        data: this.user
      }).then(res => {
        if (res.data.isok) {
          sessionStorage.setItem("adminCode", this.user.type);
          sessionStorage.setItem("userName", this.user.name);
          this.$message({
            showClose: true,
            message: "恭喜你，登录成功",
            type: "success"
          });
          this.$router.replace("/index");
        } else {
          this.$message({
            showClose: true,
            message: res.data.info,
            type: "error"
          });
        }
      });
    }
  }
};
</script>

<style lang='stylus' scoped>
@import '../common/stylus/index';

.loginBg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: $primary;
}

.login {
  box-sizing: border-box;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  margin: auto;
  padding: 20px;
  width: 400px;
  height: 300px;
  background: #fff;
  border-radius: 30% px;
}

.loginBg>>>.input {
  display: block;
  margin: 10px auto;
  width: 80%;
}

.btn {
  background: $second;
  border: 1px solid $second;
}
</style>