<template>
  <div class="managelist">
    <el-table
      class="table"
      :data="manageUser"
      height="300"
      border
      style="width: 90%"
      ref="singleTable"
      highlight-current-row
    >
      <el-table-column type="index" label="序号"></el-table-column>
      <el-table-column prop="name" label="账号"></el-table-column>
      <el-table-column prop="pass" label="密码"></el-table-column>
      <el-table-column label="时间" sortable>
        <template slot-scope="scope">
          <span>{{scope.row.time|timeToDate}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="des" label="备注"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button class="modify" type="primary" plain size="small" @click="modifyManage()">修改</el-button>
          <v-manageDel :id="scope.row.id" @manageDel="del"></v-manageDel>
        </template>
      </el-table-column>
    </el-table>
    <v-manageAdd></v-manageAdd>
  </div>
</template>

<script>
import API from "../common/js/API";
import vManageDel from "../components/views/manageDel";
import vManageAdd from "../components/views/manageAdd";
export default {
  data() {
    return {
      manageUser: []
    };
  },
  components: {
    vManageDel,
    vManageAdd
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.axios({
        url: API.findManage,
        method: "post"
      })
        .then(res => {
          this.manageUser = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    del() {
      this.init();
    },
    modifyManage() {},
    addManage() {}
  }
};
</script>

<style lang='stylus' scoped>
@import '../common/stylus/index';

.managelist>>>.table {
  margin: 10px auto;
  text-align: center;
}

.managelist>>>.modify {
  color: $third;
  border-color: $third;
}

.managelist>>>.modify:hover {
  background: $third;
  color: $font;
}

</style>