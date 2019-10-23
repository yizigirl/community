<template>
  <div class="managelist">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">维修</el-menu-item>
      <el-menu-item index="2">维修评论</el-menu-item>
    </el-menu>
    <v-maintainMain v-if="activeIndex=='1'"></v-maintainMain>
    <v-maintainCommon v-if="activeIndex=='2'"></v-maintainCommon>
  </div>
</template>

<script>
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzX4qgMCr1SC1x-y4OM9a4dXki07sbe-NKr7-__oSbgXwPzmU6nw
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJ2jW81FceHoR0q9IS_5jgnDFPz0csrD0e5P4Gq0qKOK41ZPg
import API from "../common/js/API";
import vMaintainMain from "../components/views/maintainMain";
import vMaintainCommon from "../components/views/maintainCommon";
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  components: {
    vMaintainMain,
    vMaintainCommon
  },
  methods: {
    handleSelect(key) {
      this.activeIndex=key;
    }
  }
};
</script>

<style lang='stylus' scoped>
@import '../common/stylus/index';
.el-menu-demo{
    margin-top -20px
    margin-bottom 20px
}
.managelist>>>.table {
  margin: 10px auto;
  text-align: center;
}

.img {
  width: 130px;
  height: 80px;
}
</style>