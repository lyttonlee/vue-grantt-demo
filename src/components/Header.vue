<template>
  <div class="header">
    <template v-for="(route, index) in routes">
      <router-link class="item" :key="index" :to="route.path" exact >{{route.name}}</router-link>
    </template>
  </div>
</template>
<script>
export default {
  data () {
    return {
      routes: []
    }
  },
  created () {
    this.routes = this.$router.options.routes
  },
  mounted () {
    // console.log(this.$router)
  }
}
</script>
<style lang="less" scoped>
.header {
  height: 60px;
  background: #ccc;
  text-align: center;
  box-shadow: 3px 0 8px #ccc;
  .active {
    background: rgb(231, 231, 231);
    color: rgb(61, 61, 61);
  }
  .item {
    line-height: 60px;
    height: 60px;
    padding: 0 20px;
    color: rgb(78, 78, 78);
    display: inline-block;
    &:hover {
      background: rgb(231, 231, 231);
      color: rgb(61, 61, 61);
    }
  }
}
</style>