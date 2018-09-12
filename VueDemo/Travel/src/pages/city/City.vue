<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list
      :cities="cities"
      :hot="hotCities"
      :letter = "letter"
    ></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
  import axios from 'axios'
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'
    export default {
        name: "City",
        components:{
          CityHeader,
          CitySearch,
          CityList,
          CityAlphabet
        },
        data(){
          return {
            cities : {},
            hotCities : [],
            letter:''
          }
        },
        mounted(){
          this.getCityInfo();
        },
        methods:{
          getCityInfo(){
            let vm = this;
            axios.get('/api/city.json')
              .then(function (res) {
                vm.cities = res.data.data.cities;
                vm.hotCities = res.data.data.hotCities;
              })
              .catch(function (error) {
                console.info(error);
              })
          },
          handleLetterChange(letter){
            this.letter = letter;
          }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
