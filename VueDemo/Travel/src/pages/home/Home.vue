<template>
  <div>
    <home-header></home-header>
    <home-swiper ></home-swiper>
    <home-icons :list="iconList"></home-icons>
  </div>
</template>

<script>
  import HomeHeader from './components/HomeHeader'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import axios from 'axios'
    export default {
        name: "home",
        data(){
          return {
            iconList:[]
          }
        },
        components:{
          HomeHeader,
          HomeSwiper,
          HomeIcons
        },
        mounted(){
          this.getHomeInfo();
        },
        methods:{
          getHomeInfo(){
            let vm = this;
            axios.get('/api/data.json')
              .then(function (res) {
                vm.iconList = res.data.people;
              })
              .catch(function (error) {
                console.info(error);
              })
          }
        }
    }
</script>

<style scoped>

</style>
