<template>
  <div class="houseKworker">
    <v-houseWadd @manageAdd="add" ref="addw"></v-houseWadd>
    <el-select v-model="value" placeholder="请选择家政类型">
      <el-option label="全部" value></el-option>
      <el-option v-for="(item,index) in typeT" :key="index" :label="item" :value="item"></el-option>
    </el-select>
    <el-table
      class="table"
      :data="houseKworker"
      height="300"
      border
      style="width: 90%"
      ref="singleTable"
      highlight-current-row
    >
      <el-table-column type="index" label="序号" width="80"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="tel" label="电话"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="edu" label="学历"></el-table-column>
      <el-table-column label="服务类型">
        <template slot-scope="scope">
          <span>{{scope.row.type|arrToObj}}</span>
        </template>
      </el-table-column>
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
import vHouseWadd from "./houseWadd";
export default {
  data() {
    return {
      houseKworker: [],
      typeT: [],
      value: ""
    };
  },
  components: {
    vDel,
    vHouseWadd
  },
  watch: {
    value() {
      this.axios({
        url: API.findHomeWorker,
        params: { type: this.value }
      })
        .then(res => {
          this.houseKworker = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.init();
    this.axios({
      url: API.getHomeType
    })
      .then(res => {
        this.typeT = res.data.type;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    init() {
      this.axios({
        url: API.findHomeWorker
      })
        .then(res => {
          this.houseKworker = res.data.data;
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
            url: API.delHomeWorker,
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

.houseKworker>>>.table {
  margin: 10px auto;
  text-align: center;
}

.img {
  width: 130px;
  height: 80px;
}

.houseKworker>>>.el-select {
  display: block;
  margin: 0 auto;
  width: 80%;
}
</style>