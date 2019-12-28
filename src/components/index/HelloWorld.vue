<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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

  </div>
</template>

<script>
import {fetchAgentList} from '@/api/agent'

export default {
  components: {},
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      resList: []
    }
  },
  created() {
    // this.initAgentList()
  },
  methods: {
    async initAgentList() {
      const response = await fetchAgentList()
      this.resList = response.data
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

</style>

<!--LESS Style Sample-->
<style lang="less" scoped>
  @color-white: #FFFFFF;
  @color-light-gray: #EFEFEF;
  @color-orange: #FF9A2A;
  @color-green: #7FBC39;
  @color-blue: #00B4CF;
  @color-deep-blue: #01869A;
  @color-dark-blue: #2D4054;

  .agent-container {
    margin: 10px;
    padding: 10px;
    background: @color-white;

    .agent {
      display: flex;
      align-items: center;
    }

    .agent-info {
      padding: 2px 10px;

      b {
        color: @color-blue;
      }

      i {
        font-size: 16px;
      }

      .building-badge {
        display: inline-block;
        padding: 2px 5px;
        background: @color-orange;
        color: @color-white;
      }

      .idle-badge {
        display: inline-block;
        padding: 2px 5px;
        background: @color-green;
        color: @color-white;
      }
    }
  }
</style>
