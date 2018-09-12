<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide>
        <img class="swiper-img" src="https://imgs.qunarzz.com/p/tts3/201408/09/8fc8e0f20aa09868c8d65eac.jpg_r_390x260x90_cc544545.jpg">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="https://imgs.qunarzz.com/p/tts7/1804/15/b1f22bef2db18a02.jpg_r_390x260x90_a3a30589.jpg">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        data() {
          return {
            swiperOption:{
              pagination: {
                el: '.swiper-pagination',
                autoplay:false
              }
            }
          }
        }
    }
</script>

<style lang="stylus" scoped>
  .wrapper
    overflow :hidden
    width : 100%
    height : 0
    padding-bottom 31.25%
    background #eeeeee
    .swiper-img
      width : 100%
</style>
