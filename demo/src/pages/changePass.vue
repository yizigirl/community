<template>
  <div class="changePass">
    <el-form ref="form" :model="user" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="user.name" disabled></el-input>
      </el-form-item>
      <el-form-item label="旧密码">
        <el-input v-model="user.oldpass" show-password clearable></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="user.newpass" show-password clearable></el-input>
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="80px">
      <el-form-item label="确认密码">
        <el-input v-model="confirm" show-password clearable></el-input>
      </el-form-item>
    </el-form>
    <el-button class="input btn" type="primary" @click="update">确定修改</el-button>
  </div>
</template>

<script>
import API from "../common/js/API";
export default {
  data() {
    return {
      user: {
        name: "",
        oldpass: "",
        newpass: ""
      },
      confirm: ""
    };
  },
  mounted() {
    this.user.name = sessionStorage.getItem("userName");
  },
  methods: {
    update() {
      if (this.confirm == this.user.newpass) {
        this.axios({
          url: API.changePassManage,
          method: "post",
          data: this.user
        })
          .then(res => {
            if (res.data.isok) {
              this.$message({
                showClose: true,
                message: "密码修改成功",
                type: "success"
              });
              this.$router.replace("/login");
            } else {
              this.$message({
                showClose: true,
                message: res.data.info,
                type: "error"
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$message({
          showClose: true,
          message: '请重新确认密码',
          type: "error"
        });
      }
    }
  }
};
</script>

<style lang='stylus' scoped>
@import '../common/stylus/index';

.changePass>>>.input {
  display: block;
  margin: 10px auto;
  width: 80%;
}

.btn {
  background: $second;
  border: 1px solid $second;
}
</style>