<template>
  <div class="del">
    <el-button type="danger" plain size="small" @click="del()">刪除</el-button>
  </div>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    del() {
      this.$emit("delete", this.id);
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '../../common/stylus/index';

.del {
  display: inline-block;
}
</style>