<template>
  <div class="managelist">
    <v-bannerAdd @manageAdd="add"></v-bannerAdd>
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
      <el-table-column label="图片">
        <template slot-scope="scope">
          <img class="img" :src="scope.row.img" alt="">
        </template>
      </el-table-column>
      <el-table-column prop="des" label="描述"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <v-bannerDel :id="scope.row.id" @manageDel="del"></v-bannerDel>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

import API from "../common/js/API";
import vBannerDel from "../components/views/bannerDel";
import vBannerAdd from "../components/views/bannerAdd";
export default {
  data() {
    return {
      bannerList: []
    };
  },
  components: {
    vBannerDel,
    vBannerAdd
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.axios({
        url: API.banner
      })
        .then(res => {
          this.bannerList = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    del() {
      this.init();
    },
    modify() {
      this.init();
    },
    add() {
      this.init();
    }
  }
};
</script>

<style lang='stylus' scoped>
@import '../common/stylus/index';

.managelist>>>.table {
  margin: 10px auto;
  text-align: center;
}
.img{
    width 130px
    height 80px
}
</style>