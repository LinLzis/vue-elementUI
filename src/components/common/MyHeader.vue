<template>
  <el-header class="no-padding" width="100%">

    <el-menu class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
             :router="true" :default-active="$route.path" :class="[scrolled ? 'scrolled-header' : 'un-scroll-header']">

      <img src="../../assets/logo.png" class="header-logo" alt="">

      <el-menu-item index="1" route="/">Home</el-menu-item>
      <el-menu-item index="2" route="/list">About</el-menu-item>
      <!--<el-submenu index="2">
        <template slot="title">About</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>-->
      <el-menu-item index="3" route="/br">Contact Us</el-menu-item>
    </el-menu>

  </el-header>
</template>

<script>
export default {
  components: {},
  data(){
    return {
      activeIndex: '1',
      scrolled: false
    }
  },
  props:[],
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 540
    }
  },
  mounted(){
    this.$nextTick(function () {
      window.addEventListener('scroll', this.handleScroll)
    })
  }
}

</script>


<style scoped>
  .header-logo {
    width: 50px;
    padding: 5px 80px;
    float: left;
  }
  /*.un-scroll-header {
    position: relative;
    opacity: 1;
  }
  .scrolled-header {
    transition: opacity .8s;
    position: fixed;
    opacity: 0.8;
    top:0;
    z-index: 2;
    width: 100%;
    border: 0;
  }*/
</style>
