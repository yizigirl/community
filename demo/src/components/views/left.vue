<template>
  <div class="left">
    <ul>
      <li>
        <router-link to="/index/managelist" v-if="adminCode=='0'">管理员管理</router-link>
      </li>
      <li>
        <router-link to="/index/user" v-if="adminCode=='1'">banner管理</router-link>
      </li>
      <li>
        <router-link to="/index/inform" v-if="adminCode=='1'">家教管理</router-link>
      </li>
      <li>
        <router-link to="/index/equipment" v-if="adminCode=='1'">水站管理</router-link>
      </li>
      <li>
        <router-link to="/index/equipment" v-if="adminCode=='1'">维修管理</router-link>
      </li>
      <li>
        <router-link to="/index/equipment" v-if="adminCode=='1'">家政管理</router-link>
      </li>
    </ul>

  </div>
</template>
<script>
import API from "../../common/js/API";
export default {
  data() {
    return {
      adminCode:sessionStorage.getItem('adminCode')
    }
  },
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index';

.left {
  width: 200px;
  background: $primary;
}

.left ul {
  margin-top: 20px;
}

.left ul li {
  margin: 10px auto;
  width: 80%;
  cursor: pointer;
}

.left ul li a {
  font-size: 28px;
  line-height: 40px;
  color: $font;
}
</style>