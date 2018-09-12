<template>
  <div class="layout">
    <Layout>

      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1" class="menuA">
              <Dropdown>
                <a href="javascript:void(0)">
                  <Icon type="md-person" size="16"/>
                  王五
                  <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem>个人中心</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </MenuItem>
            <MenuItem name="2">
              <Icon type="md-power" size="16"/>
              退出
            </MenuItem>
          </div>
        </Menu>
      </Header>

      <Layout class="mainDiv" :style="{height: mainHeight + 'px' }">
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                Item 1
              </template>
              <MenuItem name="1-1">Option 1</MenuItem>
              <MenuItem name="1-2">Option 2</MenuItem>
              <MenuItem name="1-3">Option 3</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                Item 2
              </template>
              <MenuItem name="2-1">Option 1</MenuItem>
              <MenuItem name="2-2">Option 2</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                Item 3
              </template>
              <MenuItem name="3-1">Option 1</MenuItem>
              <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu>
            <MenuItem name="4">
              <Icon type="ios-settings"></Icon>
              <span>Item 4</span>
            </MenuItem>
          </Menu>
        </Sider>
        <Layout class="rightDiv">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Content class="content" :style="{height: contentHeight + 'px' }">
            <router-view></router-view>
          </Content>
        </Layout>

      </Layout>

      <Layout class="footerContainer">
        <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
      </Layout>

    </Layout>

  </div>
</template>

<script>
    export default {
      name: "index",
      data () {
        return {
          mainHeight : '',
          contentHeight:''
        }
      },
      mounted(){
        this.getHeight();
      },
      methods:{
        getHeight(){
         let vm = this;
         vm.mainHeight = document.documentElement.clientHeight - 64 - 60;
         vm.contentHeight = document.documentElement.clientHeight - 64 - 60 - 69;
        }
      },
    }
</script>

<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    height: 100vh;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 0px;
  }

  .layout-footer-center{
    text-align: center;
  }
  .footerContainer{
    height:60px;
  }
  .mainDiv{
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .rightDiv{
    padding: 0 24px;
    height: inherit;
  }

  .menuA a{
    color:rgba(255,255,255,.7);
  }
  .menuA a:hover{
    color:rgba(255,255,255,1);
  }

  .content{
    padding: 24px;
    background: #fff;
    overflow-x: hidden;
    overflow-y: hidden;
  }
</style>
