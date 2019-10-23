<template>
  <div>
    <v-waterSadd @manageAdd="add" ref="addw"></v-waterSadd>
    <el-table
      class="table"
      :data="bannerList"
      height="300"
      border
      style="width: 90%"
      ref="singleTable"
      highlight-current-row
    >
      <el-table-column type="index" label="序号" width="80"></el-table-column>
      <el-table-column prop="name" label="水站名称"></el-table-column>
      <el-table-column prop="tel" label="电话"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            class="modify"
            type="primary"
            plain
            size="small"
            @click="$refs.addw.modify(scope.row.id)"
          >查看</el-button>
          <v-del :id="scope.row.id" @delete="del"></v-del>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import API from "../../common/js/API";
import vDel from "../common/del";
import vWaterSadd from "./waterSadd";
export default {
  data() {
    return {
      bannerList: []
    };
  },
  components: {
    vDel,
    vWaterSadd
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.axios({
        url: API.findWater
      })
        .then(res => {
          this.bannerList = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    del(id) {
      this.$confirm("此操作将永久该条信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.axios({
            url: API.delWater,
            params: { id }
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
            this.init();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    add() {
      this.init();
    }
  }
};
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/index';

.managelist>>>.table {
  margin: 10px auto;
  text-align: center;
}

.img {
  width: 130px;
  height: 80px;
}
</style>