<template>
  <div class="managelist">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">水站</el-menu-item>
      <el-menu-item index="2">水站评论</el-menu-item>
    </el-menu>
    <v-waterStation v-if="activeIndex=='1'"></v-waterStation>
    <v-waterComment v-if="activeIndex=='2'"></v-waterComment>
  </div>
</template>

<script>
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzX4qgMCr1SC1x-y4OM9a4dXki07sbe-NKr7-__oSbgXwPzmU6nw
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJ2jW81FceHoR0q9IS_5jgnDFPz0csrD0e5P4Gq0qKOK41ZPg
import API from "../common/js/API";
import vWaterStation from "../components/views/waterStation";
import vWaterComment from "../components/views/waterComment";
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  components: {
    vWaterStation,
    vWaterComment
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