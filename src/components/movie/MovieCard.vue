<template>
  <el-row>
    <el-col :span="4" v-for="(m, index) in firstList" :key="m.src" :offset="0" class="movie-col-style" v-if="movietype === 'first'">
      <el-card :body-style="{ padding: '0px'}">
        <img :src="'static/img/' + m.src" class="image">
        <div style="padding: 14px;text-align: left;">
          <span>{{m.name}}</span>
          <div class="bottom clearfix">
            <span class="desc">{{m.desc}}</span>
            <el-button type="text" class="button" @click="test()" style="font-size: 12px;">皮一下</el-button>
          </div>
        </div>
      </el-card>
    </el-col>

    <el-col :span="4" v-for="(m, index) in nextList" :key="m.src" :offset="0" class="movie-col-style" v-if="movietype === 'next'">
      <el-card :body-style="{ padding: '0px'}">
        <img :src="'static/img/' + m.src" class="image">
        <div style="padding: 14px;text-align: left;">
          <span>{{m.name}}</span>
          <div class="bottom clearfix">
            <span class="desc">{{m.desc}}</span>
            <el-button type="text" class="button" @click="addLike(index)" v-if="!m.isLike"><i class="el-icon-star-off"></i></el-button>
            <el-button type="text" class="button" @click="removeLike(index)" v-if="m.isLike"><i class="el-icon-star-on"></i></el-button>
          </div>
        </div>
      </el-card>
    </el-col>

    <el-col :span="4" v-for="(m, index) in rankList" :key="m.src" :offset="0" class="movie-col-style" v-if="movietype === 'rank'">
      <el-card :body-style="{ padding: '0px'}">
        <img :src="'static/img/' + m.src" class="image">
        <el-row>
          <el-col :span="4"><span style="font-size: 40px;line-height: 70px; padding-left: 10px;color: orange;">{{index + 1}}</span></el-col>
          <el-col :span="20">
            <div style="padding: 14px;text-align: left;">
              <p class="no-margin">{{m.name}}</p>
              <p class="no-margin desc">{{m.desc}}</p>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </el-col>

  </el-row>
</template>

<script>

  export default {
    components: {},
    data(){
      return {
        firstList: [
          {src: '1.jpg', name:'二代妖精', desc: '刘亦菲变身狐狸精'},
          {src: '2.jpg', name:'至爱梵高', desc: '世界首部裸眼3D油画电影'},
          {src: '3.jpg', name:'二十二', desc: '她们用一生等待日本道歉'},
          {src: '4.jpg', name:'奇门遁甲', desc: '返璞归真的中国秘术'},
          {src: '5.jpg', name:'万物理论', desc: '霍金传记片解密情感往事'},
          {src: '6.jpg', name:'帕丁顿熊2', desc: '暖萌暴击！绅士熊玩转英式幽默'},
          {src: '7.jpg', name:'至暗时刻', desc: '加里奥德曼演活英国首相'},
          {src: '8.jpg', name:'正义联盟', desc: '超人开黑一腿带五坑'},
          {src: '9.jpg', name:'雷神3', desc: '雷神抖森绿巨人全员回归'},
          {src: '10.jpg', name:'甜蜜小谎言', desc: '夫妻齐出轨'},
          {src: '11.jpg', name:'战狼2', desc: '最燃国产军事片续集'},
          {src: '12.jpg', name:'夏洛特烦恼', desc: '开心麻花要你好笑'}
        ],
        nextList: [
          {src: 'n1.jpg', name:'十八洞村', desc: '王学圻陈瑾共演人生悲欢', isLike:false},
          {src: 'n2.jpg', name:'密战', desc: '郭富城赵丽颖张翰生死暗战', isLike:false},
          {src: 'n3.jpg', name:'月影江湖', desc: '兄弟携手拯救隐世名门', isLike:false},
          {src: 'n4.jpg', name:'勇敢者游戏', desc: '决战丛林', isLike:false},
          {src: 'n5.jpg', name:'火力全开', desc: '王力宏音乐人生', isLike:false},
          {src: 'n6.jpg', name:'南极之恋', desc: '赵又廷杨子珊再续前缘', isLike:false}
        ],
        rankList: [
          {src: 'rank1.jpg', name:'帕丁顿熊2', desc: '绅士熊玩转英式幽默'},
          {src: 'rank2.jpg', name:'前任3', desc: '韩庚郑恺“双贱合璧”'},
          {src: 'rank3.jpg', name:'至爱梵高', desc: '世界首部裸眼3D油画电影'},
          {src: 'rank4.jpg', name:'一家两口', desc: '求子教科书爆笑上'},
          {src: 'rank5.jpg', name:'芳华', desc: '冯女郎书写绝色青春'},
          {src: 'rank6.jpg', name:'龙潭虎穴', desc: '李连杰变身特工'}
        ]
      }
    },
    methods: {
      test: function () {
        this.$emit('update:movietype', 'rank');
      },
      addLike: function (index) {
        this.nextList[index].isLike = true;
      },
      removeLike: function (index) {
        this.nextList[index].isLike = false;
      }
    },
    props: ['movietype']
  }

</script>

<style scoped>
  .desc {
    font-size: 13px;
    color: #999;
  }

  .movie-col-style {
    margin-bottom: 10px;
    padding: 0 5px;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    height: 300px;
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
