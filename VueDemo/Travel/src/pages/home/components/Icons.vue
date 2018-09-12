<template>
  <div class="icons">
    <swiper>
      <!-- slides -->
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="(item,index) in page">
          <div>
            {{item}}
          </div>
          <p class="icon-title">{{item}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
    export default {
        name: "HomeIcons",
        props:{
          list:Array
        },
        computed:{
          pages(){
            const pages = [];
            this.list.forEach((item,index) => {
              const page = Math.floor(index/8);
              if(!pages[page]){
                pages[page] = [];
              }
              pages[page].push(item.text);
            })
            return pages;
          }
        }
    }

</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .icons
    overflow : hidden
    height : 0
    padding-bottom : 50%
    background : #5daf34
    .icon
      overflow : hidden
      width : 25%
      float : left
      padding-bottom :25%
      background : red
      .icon-title
        ellipsis()
</style>
