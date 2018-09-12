<template>
    <div>

      <div ref="topDivH">
        <Row>
          <Col span="24">
            <Card style="width:100%">
              <Row>
                <Col span="18">
                  <Row>
                    <Col span="2">姓名：</Col>
                    <Col span="6">张三</Col>
                    <Col span="2">编号：</Col>
                    <Col span="6">YK5252528</Col>
                    <Col span="2">性别：</Col>
                    <Col span="6">男</Col>
                  </Row>
                </Col>
                <Col span="6">
                  <img src="../../assets/logo.png" style="width: 100px">
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>

      <Row>
        <Col span="24">
          <Tabs value="name1" :animated="false" @on-click="changeTab">
            <TabPane label="标签一" name="name1">
              <Table border :height="tabHeight" :columns="columns1" :data="data1"></Table>
              <div style="margin: 10px;" ref="pageDivH">
                <div style="float: right;">
                  <Page :total="15" :current="1" show-elevator @on-change="changePage"></Page>
                </div>
              </div>
            </TabPane>
            <TabPane label="标签二" name="name2">
              <div style="margin: 10px;overflow: hidden">
                <div style="float: right;">
                  <Button type="error">删除</Button>
                  <Button type="primary">新增</Button>
                </div>
              </div>
              <Table border :columns="columns2" :data="data2"  @on-select="selected" @on-select-cancel="unSelected"></Table>
            </TabPane>
            <TabPane label="标签三" name="name3">标签三的内容</TabPane>
          </Tabs>
        </Col>
      </Row>

      <Modal v-model="modal1" title="详情" @on-ok="ok" @on-cancel="cancel">
          <Row>
            <Col span="5"><span>互动方式：</span></Col>
            <Col span="5"><span>音频通话</span></Col>
            <Col span="5" offset="4"><span>互动时间：</span></Col>
            <Col span="5"><span>2018-07-28</span></Col>
          </Row>
          <Row>
            <Col span="5">互动内容：</Col>
            <Col span="19">产品销售</Col>
          </Row>
      </Modal>

    </div>
</template>

<script>
    export default {
      name: "doctorBf",
      data(){
          return{
            modal1:false,
            columns1: [{type: 'index',width: 60,align: 'center'},{title: '标题',key: 'title'},
              {title: 'ID',key: 'id'},{title: '内容',key: 'content'},{title: '浏览次数',key: 'total'},
              {title: '图片地址',key: 'thumb'},{title: '操作',key: 'action',width: 80,align: 'center',
                render: (h, params) => {
                  return h('div', [h('Button', {
                    props: {type: 'primary', size: 'small'},
                    style: {marginRight: '5px'},
                    on: {click: () => {this.show(params.index)}}
                    }, '详情')
                  ]);
                }
              }
              ],
            data1:[],
            data2:[],
            curpage:1,
            columns2: [{type: 'selection',width: 60,align: 'center'},{title: '标题',key: 'title'}, {title: 'ID',key: 'id'},{title: '内容',key: 'contents'},{title: '浏览次数',key: 'total'}],
            tabHeight:''
          }
      },
      mounted(){
        this.setTabHeight();
        this.getData1();
      },
      methods:{
        setTabHeight(){
          let vm = this;
          vm.tabHeight = document.documentElement.clientHeight - 124 - 69 -52 - this.$refs.topDivH.offsetHeight -42;
        },
        getData1(){
          let vm = this;
          this.$http.get(vm.$commonTools.g_restUrl, {
            params: {
              i: '8',
              c: 'entry',
              p: 'article',
              do: 'shop',
              m: 'ewei_shop',
              ccate: 35, //分类
              page: vm.curpage
            }
          })
            .then(function (response) {
              vm.data1 = response.data.result.list;
            })
            .catch(function (error) {
              console.log(error);
            });
        },
        getData2(){
          let vm = this;
          this.$http.get(vm.$commonTools.g_restUrl, {
            params: {
              i: '8',
              c: 'entry',
              p: 'article',
              do: 'shop',
              m: 'ewei_shop',
              ccate: 37, //分类
              page: vm.curpage
            }
          })
            .then(function (response) {
              vm.data2 = response.data.result.list;
            })
            .catch(function (error) {
              console.log(error);
            });
        },
        show(){
          this.modal1 = true;
        },
        changeTab(name){
          console.info(name);
          let vm = this;
          if(name == 'name1'){
            vm.getData1();
          }else if(name == 'name2'){
            vm.getData2();
          }
        },
        ok () {
          this.$Message.info('Clicked ok');
        },
        cancel () {
          this.$Message.info('Clicked cancel');
        },
        changePage(newPage){
          let vm = this;
          vm.curpage = newPage;
          vm.getData1();
        },
        selected(selection,row){
          console.info(selection)
        },
        unSelected(selection,row){
          console.info(selection)
        }

      }
    }
</script>

<style scoped>

</style>
