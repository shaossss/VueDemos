<template>
    <div class="pos">
      <div>
        <el-row>
          <el-col :span="7" id="order-list">
            <el-tabs v-model="activeName">
              <el-tab-pane label="点餐" name="first">
                <el-table :data="tableData" border style="width: 100%">
                  <el-table-column prop="goodsName" label="商品"></el-table-column>
                  <el-table-column prop="count" label="量" width="50"></el-table-column>
                  <el-table-column prop="price" label="金额" width="70"></el-table-column>
                  <el-table-column label="操作" width="100" fixed="right">
                    <template  slot-scope="scope">
                      <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                      <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <div class="">
                  <small>数量：</small>{{totalCount}} &nbsp;&nbsp;&nbsp;&nbsp; <small>金额：</small>{{totalMoney}}元
                </div>
                <el-row class="btn-center">
                  <el-button type="warning" plain round>挂单</el-button>
                  <el-button type="danger" plain round @click="delAllGoods()">删除</el-button>
                  <el-button type="success" plain round>结账</el-button>
                </el-row>

              </el-tab-pane>
              <el-tab-pane label="挂单" name="second">挂单</el-tab-pane>
              <el-tab-pane label="外卖" name="third">外卖</el-tab-pane>
            </el-tabs>
          </el-col>
          <el-col :span="17">
            <div class="often-goods">
              <div class="title">常用商品</div>
              <div class="often-goods-list">
                <ul>
                  <li v-for="good in oftenGoods" @click="addOrderList(good)">
                    <span v-text="good.goodsName"></span>
                    <span class="o-price" v-text="good.price"></span>
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :span="17">
            <div class="goods-type">
              <el-tabs v-model="activeName1">
                <el-tab-pane label="汉堡" name="first1">
                  <ul class="cookList">
                    <li v-for="cook0 in type0Goods" @click="addOrderList(cook0)">
                      <span class="foodImg"><img :src="cook0.goodsImg" width="100%"></span>
                      <span class="foodName" v-text="cook0.goodsName"></span>
                      <span class="foodPrice" v-text="cook0.price"></span>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="小食" name="second2">
                  <ul class="cookList">
                    <li v-for="cook1 in type1Goods" @click="addOrderList(cook1)">
                      <span class="foodImg"><img :src="cook1.goodsImg" width="100%"></span>
                      <span class="foodName" v-text="cook1.goodsName"></span>
                      <span class="foodPrice" v-text="cook1.price"></span>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="饮料" name="third3">
                  <ul class="cookList">
                    <li v-for="cook2 in type2Goods" @click="addOrderList(cook2)">
                      <span class="foodImg"><img :src="cook2.goodsImg" width="100%"></span>
                      <span class="foodName" v-text="cook2.goodsName"></span>
                      <span class="foodPrice" v-text="cook2.price"></span>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="套餐" name="four4">
                  <ul class="cookList">
                    <li v-for="cook3 in type3Goods" @click="addOrderList(cook3)">
                      <span class="foodImg"><img :src="cook3.goodsImg" width="100%"></span>
                      <span class="foodName" v-text="cook3.goodsName"></span>
                      <span class="foodPrice" v-text="cook3.price"></span>
                    </li>
                  </ul>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "Pos",
        data(){
          return{
            activeName:'first',
            activeName1:'first1',
            tableData:[],
            oftenGoods:[],
            type0Goods:[],
            type1Goods:[],
            type2Goods:[],
            type3Goods:[],
            //订单列表中的内容
            totalCount:0,
            totalMoney:0
          };
        },
      mounted:function () {//高度100%
        var orderHeight = document.body.clientHeight;
        document.getElementById("order-list").style.height = orderHeight +'px';

      },
      created(){
          var vm = this;
          axios.all([getOftengoods(),getTypegoods()])
            .then(axios.spread(function (acct,perms) {
                vm.oftenGoods = acct.data;
                vm.type0Goods = perms.data[0];
                vm.type1Goods = perms.data[1];
                vm.type2Goods = perms.data[2];
                vm.type3Goods = perms.data[3];
            }));
      },
      methods:{
          addOrderList (goods) {
            this.totalCount = 0;
            this.totalMoney = 0;
            let isHave = false;
            //判断这个商品是否已存在于订单列表
            for(let i = 0;i<this.tableData.length;i++){
              console.log(this.tableData[i].goodsName);
              if(this.tableData[i].goodsName == goods.goodsName){
                isHave = true;
              }
            }
            if(isHave){
              //存在就进行数量添加
              let arr = this.tableData.filter(o=>o.goodsName == goods.goodsName);
              arr[0].count++;
            }else{
              //不存在就推入数组
              let newGoods = {goodsName:goods.goodsName,price:goods.price,count:1};
              this.tableData.push(newGoods);
            }

            //进行数量和价格的汇总计算
            this.tableData.forEach((element) =>{
              this.totalCount += element.count;
              this.totalMoney = this.totalMoney + (element.price*element.count);
            });
          },
        delSingleGoods(goods){
            this.tableData = this.tableData.filter(o=>o.goodsName != goods.goodsName);
        },
        delAllGoods(){
            this.tableData = [];
            this.totalMoney = 0;
            this.totalCount = 0;
        }
      }
    }

    function getOftengoods() {
      return axios.get('http://jspang.com/DemoApi/oftenGoods.php')
    }
    function getTypegoods() {
      return axios.get('http://jspang.com/DemoApi/typeGoods.php');
    }
</script>

<style scoped>
  .btn-center{
    padding-top: 1rem;
    text-align: center;
  }
  .title{
    height: 20px;
    border-bottom:1px solid #D3DCE6;
    background-color: #F9FAFC;
    padding:10px;
  }
  .often-goods-list ul li{
    list-style: none;
    float:left;
    border:1px solid #E5E9F2;
    padding:10px;
    margin:5px;
    background-color:#fff;
  }
  .o-price{
    color:#58B7FF;
  }
  .cookList li{
    list-style: none;
    width:23%;
    border:1px solid #E5E9F2;
    height: auto;
    overflow: hidden;
    background-color:#fff;
    padding: 2px;
    float:left;
    margin: 2px;

  }
  .cookList li span{

    display: block;
    float:left;
  }
  .foodImg{
    width: 40%;
  }
  .foodName{
    font-size: 18px;
    padding-left: 10px;
    color:brown;

  }
  .foodPrice{
    font-size: 16px;
    padding-left: 10px;
    padding-top:10px;
  }

</style>
