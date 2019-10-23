<template>
  <div class="managelist">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">家教banner</el-menu-item>
      <el-menu-item index="2">家教类型</el-menu-item>
      <el-menu-item index="3">家教排行</el-menu-item>
    </el-menu>
    <v-teacherBanner v-if="activeIndex=='1'"></v-teacherBanner>
    <v-teacherType v-if="activeIndex=='2'"></v-teacherType>
    <v-teacherSort v-if="activeIndex=='3'"></v-teacherSort>
  </div>
</template>

<script>
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzX4qgMCr1SC1x-y4OM9a4dXki07sbe-NKr7-__oSbgXwPzmU6nw
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJ2jW81FceHoR0q9IS_5jgnDFPz0csrD0e5P4Gq0qKOK41ZPg
import API from "../common/js/API";
import vTeacherBanner from "../components/views/teacherBanner";
import vTeacherSort from "../components/views/teacherSort";
import vTeacherType from "../components/views/teacherType";
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  components: {
    vTeacherBanner,
    vTeacherSort,
    vTeacherType
  },
  mounted() {
    this.init();
  },
  methods: {
    handleSelect(key) {
      this.activeIndex=key;
    },
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