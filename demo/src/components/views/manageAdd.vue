<template>
  <div class="manageAdd">
    <el-button type="primary" class="btn" @click="willAdd">添加</el-button>
    <el-dialog class="textPri" title="添加管理员" :visible.sync="dialogFormVisible">
      <el-form :model="user">
        <el-form-item label="账号" class="item">
          <el-input v-model="user.name" autocomplete="off" clearable :disabled="isDisable"></el-input>
        </el-form-item>
        <el-form-item label="密码" class="item">
          <el-input v-model="user.pass" clearable :disabled="isDisable"></el-input>
        </el-form-item>
        <el-form-item label="时间" class="item">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="user.time"
            style="width: 100%;"
            clearable
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="描述" class="item">
          <el-input class="textarea" type="textarea" v-model="user.des" clearable></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addManage()">确 定</el-button>
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
      dialogFormVisible: false,
      isDisable: false
    };
  },
  methods: {
    willAdd() {
      this.dialogFormVisible = true;
      this.isDisable = false;
      this.user = {
        name: "",
        pass: "",
        time: "",
        des: ""
      };
    },
    modify(id) {
      this.dialogFormVisible = true;
      this.isDisable = true;
      this.id = id;
      this.axios({
        url: API.findManage,
        method: "post",
        data: { id }
      }).then(res => {
        this.user = res.data.data[0];
        this.user.time=parseInt(this.user.time);
      });
    },
    addManage() {
      // this.user.time = Date.parse(this.user.time);
      var d=this.user;
      d.time=new Date(this.user.time).getTime()
      this.dialogFormVisible = false;
      if (this.user.id) {
        this.axios({
          url: API.updateManage,
          method: "post",
          data: d
        }).then(res => {
          if (res.data.isok) {
            this.$emit("manageAdd");
            this.user = {
              name: "",
              pass: "",
              time: "",
              des: ""
            };
            this.$message({
              type: "success",
              message: "修改成功!"
            });
          } else {
            this.$message({
              type: "info",
              message: res.data.info
            });
          }
        });
      } else {
        this.axios({
          url: API.addManage,
          method: "post",
          data: d
        }).then(res => {
          if (res.data.isok) {
            this.$emit("manageAdd");
            this.user = {
              name: "",
              pass: "",
              time: "",
              des: ""
            };
            this.$message({
              type: "success",
              message: "添加成功!"
            });
          } else {
            this.$message({
              type: "info",
              message: res.data.info
            });
          }
        });
      }
    }
  }
};
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/index';

// .manageAdd>>>.modify {
// color: $third;
// border-color: $third;
// }

// .manageAdd>>>.modify:hover {
// background: $third;
// color: $font;
// }
.btn {
  margin-left: 5%;
  background: $second;
  border: 1px solid $second;
}

.manageAdd {
  display: inline-block;
}

.manageAdd>>>.el-textarea__inner {
  resize: none;
}

.manageAdd>>>.textarea {
  resize: none;
}

.manageAdd>>>.el-dialog__title {
  color: $third;
  font-size: 28px;
  line-height: 40px;
  text-align: center;
}

.manageAdd .item {
  margin: 0;
}

.manageAdd>>>.el-dialog__body {
  padding-top: 10px;
  padding-bottom: 10px;
}

.el-dialog__wrappe {
  z-index: 1;
}

.el-dialog__wrapper>>>.el-dialog {
  z-index: 9999;
}
</style>