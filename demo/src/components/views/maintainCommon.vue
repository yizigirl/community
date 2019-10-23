<template>
  <div class="waterComment">
    <el-select v-model="value" placeholder="请选择水站">
      <el-option v-for="item in waterStation" :key="item.id" :label="item.name" :value="item.id"></el-option>
    </el-select>
    <el-table
      class="table"
      :data="waterComment"
      height="300"
      border
      style="width: 90%"
      ref="singleTable"
      highlight-current-row
    >
      <el-table-column type="index" label="序号" width="80"></el-table-column>
      <el-table-column prop="name" label="用户名称"></el-table-column>
      <el-table-column prop="content" label="用户评论"></el-table-column>
      <el-table-column label="评价时间">
        <template slot-scope="scope">
          <span>{{scope.row.time}}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <v-del :id="scope.row.id" @delete="del"></v-del>
        </template>
      </el-table-column>
    </el-table>
    <!-- <button @click="c">diandian -->
    <!-- </button> -->
  </div>
</template>

<script>
import API from "../../common/js/API";
import vDel from "../common/del";
export default {
  data() {
    return {
      waterComment: [],
      waterStation: [],
      value: "全部"
    };
  },
  components: {
    vDel
  },
  watch: {
    value() {
      if (this.value != "全部") {
        this.axios({
          url: API.findRepairComment,
          params: { waterId: this.value }
        })
          .then(res => {
            this.waterComment = res.data.data;
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  },
  mounted() {
    this.init();
    this.axios({
      url: API.findRepair
    })
      .then(res => {
        this.waterStation = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    init() {
      this.axios({
        url: API.findRepairComment
      })
        .then(res => {
          this.waterComment = res.data.data;
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
            url: API.delComment,
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

.waterComment>>>.table {
  margin: 10px auto;
  text-align: center;
}

.img {
  width: 130px;
  height: 80px;
}

.waterComment>>>.el-select {
  display: block;
  margin: 0 auto;
  width: 80%;
}
</style>