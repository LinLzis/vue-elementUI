<template>
  <div class="hello">
    <!--<h1>Welcome to Your Vue.js App</h1>-->

    <div style="width: 1420px; margin: 0 auto;">
      <el-carousel indicator-position="outside" arrow="never" height="490px">
        <el-carousel-item v-for="item in sliders" :key="item.src">
          <img :src="'static/img/' + item.src" class="slider-img">
        </el-carousel-item>
      </el-carousel>

      <!--<el-row>-->
        <!--<el-col :span="12" align="left"><span style="font-size: 30px; line-height: 46px;">首播影院</span></el-col>-->
        <!--<el-col :span="12" align="right"><span style="font-size: 20px; line-height: 46px;">更多</span></el-col>-->
      <!--</el-row>-->
      <h2 align="left" style="font-size: 30px;margin-top: 30px;">首播影院</h2>
      <MovieCard :movietype.sync="type"></MovieCard>

      <h2 align="left" style="font-size: 30px;margin-top: 30px;">强势接档</h2>
      <el-steps :active="1" align-center>
        <el-step title="本周五" icon="el-icon-star-on"></el-step>
        <el-step title="本周五" icon="el-icon-star-on"></el-step>
        <el-step title="本周日" icon="el-icon-star-on"></el-step>
        <el-step title="3月22日" icon="el-icon-star-on"></el-step>
        <el-step title="3月25日" icon="el-icon-star-on"></el-step>
        <el-step title="3月27日" icon="el-icon-star-on"></el-step>
      </el-steps>
      <MovieCard movietype="next"></MovieCard>

      <h2 align="left" style="font-size: 30px;margin-top: 30px;">排行榜</h2>
      <MovieCard movietype="rank"></MovieCard>

      <br>

    </div>

    <!--<h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>

    <el-button type="primary">主要按钮</el-button>
    <el-button type="primary">主要按钮</el-button>-->

  </div>
</template>

<script>
  import MovieCard from '../movie/MovieCard.vue';

  export default {
    components: {
      MovieCard
    },
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        sliders: [
          {src: 'zask.jpg', name: 'TEST001'},
          {src: 'zylm.jpg', name: 'TEST002'},
          {src: 'tt.jpg', name: 'TEST003'}
        ],
        type: 'first'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .slider-img {
    height: 490px;
  }
</style>
