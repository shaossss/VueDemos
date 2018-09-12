<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="city">
    <div class="header-right">
      <span class="iconfont arrow-icon">&#xe64a;</span>
      城市
    </div>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "HomeHeader"
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    display : flex
    height : .86rem
    background : $bgColor
    color : #ffffff
    .header-left
      width : .64rem
      float : left
      .back-icon
        text-align : center
        font-size : .4rem
        height : .86rem
        line-height : .86rem
    .header-input
      flex:1
      height : .64rem
      line-height :.64rem
      margin-top : .12rem
      margin-left : .2rem
      padding-left : .2rem
      background : #ffffff
      border-radius : .1rem
      color : #cccccc
    .header-right
      width : 1.24rem
      height : .86rem
      line-height : .86rem
      float : right
      text-align : center
      color : white
      .arrow-icon
        font-size : .24rem

</style>
