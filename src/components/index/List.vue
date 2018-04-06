<template>
  <div class="list">
    <el-table :data="CarrierList" stripe style="width: 100%;margin-bottom: 50px;" align="left" :default-sort = "{prop: 'carrierID', order: 'ascending'}">
      <el-table-column prop="carrierID" label="carrierID" width="180"></el-table-column>
      <el-table-column prop="name" label="name" width="180"></el-table-column>
      <el-table-column prop="scac" label="scac"></el-table-column>
      <el-table-column prop="shortName" label="shortName"></el-table-column>
      <el-table-column prop="sortingKey" label="sortingKey"></el-table-column>
      <el-table-column prop="url" label="url"></el-table-column>
    </el-table>

    <el-table :data="tableData" style="width: 100%" align="left">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="商品 ID" prop="id"></el-table-column>
      <el-table-column label="商品名称" prop="name"></el-table-column>
      <el-table-column label="描述" prop="desc"></el-table-column>
    </el-table>

  </div>

</template>

<script>

  export default {
    components: {
    },
    name: 'List',
    data () {
      return {
        tableData: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }],
        CarrierList: [],
        RouteSchedules: []
      }
    },
    methods: {
      initCarrierList: function () {
        var self = this;
        this.$http.get('https://www.bigschedules.com/openapi/carriers/list', {
          params: {
            appKey: "5cc3e1a0-b150-11e6-b38b-398ce8e44d39",
          }
        })
          .then(function (response) {
            self.CarrierList = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      initRouteSchedules: function () {
        var self = this;
        this.$http.get('https://www.bigschedules.com/openapi/schedules/routeschedules', {
          params: {
            appKey: "5cc3e1a0-b150-11e6-b38b-398ce8e44d39",
            porID: "P189",
            fndID: "P355"
          }
        })
          .then(function (response) {
            self.RouteSchedules = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    mounted(){
      this.$nextTick(function () {
        this.initCarrierList();
//        this.initRouteSchedules();
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list {
    width: 80%;
    margin: 10px auto;
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
