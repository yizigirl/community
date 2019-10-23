<template>
  <div class="managelist">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">家政banner</el-menu-item>
      <el-menu-item index="2">人员管理</el-menu-item>
    </el-menu>
    <v-houseKbanner v-if="activeIndex=='1'"></v-houseKbanner>
    <v-houseKworker v-if="activeIndex=='2'"></v-houseKworker>
  </div>
</template>

<script>
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzX4qgMCr1SC1x-y4OM9a4dXki07sbe-NKr7-__oSbgXwPzmU6nw
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJ2jW81FceHoR0q9IS_5jgnDFPz0csrD0e5P4Gq0qKOK41ZPg
import API from "../common/js/API";
import vHouseKbanner from "../components/views/houseKbanner";
import vHouseKworker from "../components/views/houseKworker";
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  components: {
    vHouseKbanner,
    vHouseKworker
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