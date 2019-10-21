<template>
  <div class="index">
    <v-head></v-head>
    <div class="main">
      <v-left></v-left>
      <v-right></v-right>
    </div>
  </div>
</template>

<script>
import vHead from "../components/views/head";
import vLeft from "../components/views/left";
import vRight from "../components/views/right";
export default {
  components: {
    vHead,
    vLeft,
    vRight
  }
};
</script>

<style lang="stylus" scoped>
.index {
  width 100vw
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
  display: flex;
}
</style>
