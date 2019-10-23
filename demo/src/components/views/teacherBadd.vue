<template>
  <div class="manageAdd">
    <el-button type="primary" class="btn" @click="dialogFormVisible = true">添加</el-button>
    <el-dialog class="textPri" title="添加banner" :visible.sync="dialogFormVisible">
      <el-form :model="bannerAdd">
        <el-form-item label="图片" class="item">
          <el-input v-model="bannerAdd.img" autocomplete="off" clearable></el-input>
        </el-form-item>
        <el-form-item label="描述" class="item">
          <el-input v-model="bannerAdd.des" autocomplete="off" clearable></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addManage()">添加</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import API from "../../common/js/API";
export default {
  data() {
    return {
      bannerAdd: {
        img: "",
        des: ""
      },
      dialogFormVisible: false
    };
  },
  methods: {
    addManage() {
      this.axios({
        url: API.addTeacherBanner,
        params: this.bannerAdd
      }).then(res => {
        if (res.data.isok) {
          this.$emit("manageAdd");
          this.bannerAdd = {
            img: "",
            des: ""
          };
          this.dialogFormVisible = false;
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