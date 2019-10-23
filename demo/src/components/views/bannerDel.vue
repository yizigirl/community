<template>
<div class="managedel">
  <el-button type="danger" plain size="small" @click="delManage()">刪除</el-button></div>
</template>

<script>
import API from "../../common/js/API";
export default {
  props: ["id"],
  data() {
    return {};
  },
  methods: {
    delManage() {
      this.$confirm("此操作将永久删除该图片, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.axios({
            url: API.delBanner,
            params: { id: this.id }
          }).then(res => {
            if (res.data.isok) {
              this.$emit("manageDel");
              this.$message({
                type: "success",
                message: "删除成功!"
              });
            } else {
              this.$message({
                type: "info",
                message: res.data.info
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/index';
.managedel{
    display inline-block
}
</style>