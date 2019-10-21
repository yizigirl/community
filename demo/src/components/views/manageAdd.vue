<template>
  <div class="manageAdd">
    <el-button type="primary" class="btn" @click="addManage()">添加</el-button>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="user">
        <el-form-item label="账号">
          <el-input v-model="user.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="user.pass"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-date-picker type="date" placeholder="选择日期" v-model="user.time" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="描述">
          <el-input class="textarea" type="textarea" v-model="user.des"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import API from "../../common/js/API";
export default {
  data() {
    return {
      user: {
        name: "",
        pass: "",
        time: "",
        des: ""
      },
      dialogFormVisible: false
    };
  },
  methods: {
    addManage() {
      this.dialogFormVisible = true;
    }
  }
};
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/index';

.btn {
  margin-left: 5%;
  background: $second;
  border: 1px solid $second;
}

.manageAdd {
  display: inline-block;
}
.manageAdd>>>.textarea{
    resize none 
}
</style>