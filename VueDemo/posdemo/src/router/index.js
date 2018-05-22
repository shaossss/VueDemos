import Vue from 'vue'//引入Vue
import Router from 'vue-router' //引入vue-router
import Pos from '@/components/page/Pos' //引入根目录下的Pos组件

Vue.use(Router)

export default new Router({
  routes: [            //配置路由，这里是个数组
    {                  //每一个链接都是一个对象
      path: '/',       //链接路径
      name: 'Pos',     //路由名称
      component: Pos    //对应的组件模板
    }
  ]
})
