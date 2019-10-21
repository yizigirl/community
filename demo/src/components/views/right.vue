<template>
<div class="right">
    <h1 class="textPri">{{$route.name}}</h1>
    <router-view></router-view>
</div>
</template>

<script>
import API from '../../common/js/API' 
export default {}
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/index'
.right {
  flex: 1;
  padding: 20px;
}
.textPri{
  margin-bottom 30px
}
</style>