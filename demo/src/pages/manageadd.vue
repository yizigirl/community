<template>
  <div>
     <el-form-item ref="form" :model="user" label-width="80%">
     <!-- <el-form-item label="账号">
        <el-input v-model="user.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.pass"></el-input>
      </el-form-item>
      <el-form-item label="时间">
        <el-date-picker type="date" placeholder="选择日期" v-model="user.time" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" v-model="user.des"></el-input>
      </el-form-item> -->
      <!-- <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item> -->
    </el-form-item>
  </div>
</template>

<script>
import API from "../common/js/API";
export default {
  data() {
    return {
      user: {
        name: "",
        pass: "",
        time: '',
        des: ""
      }
    };
  },
  methods: {
      onSubmit(){}
  },
};
</script>

<style lang='stylus' scoped>
@import '../common/stylus/index';
</style>