<template>
  <el-footer class="my-footer" height="20px">
    &copy; 2018 Avri Li. Licensed under MIT.
  </el-footer>
</template>

<script>
  export default {
    components: {
    },
    data(){
      return {}
    },
    methods: {}
  }

</script>

<style scoped>
  .my-footer {
    text-align: center;
    bottom: 0;
    width: 100%;
    /*background: #2c3e50;*/
    background: rgb(84, 92, 100);
    opacity: 0.8;
    color: azure;
    line-height: 20px;
    font-size: smaller;
    position: fixed;
    z-index: 5;
  }
</style>
