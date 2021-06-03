<template>
  <Scroll class="wrapper"
          :data="data"
          :pullup="pullup"
          @scrollToEnd="loadData">
    <ul class="content">
      <li v-for="item in data" :key="item">{{item}}</li>
    </ul>
    <div class="loading-wrapper"></div>
  </Scroll>
</template>

<script>
import Scroll from '../../components/Scroll.vue'
  export default {
    data() {
      return {
        data: [],
        pullup: true
      }
    },
    components:{Scroll},
    created() {
      // this.loadData()
    },
    methods: {
      loadData() {
        this.data=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,3]
        console.log('123')
      }
    }
  }
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.wrapper{
  width: 100%;
  height: 200px;
  border: 1px solid red;
  box-sizing: border-box;
}
.content{
  height: 1000px;
  background: blue;
}
</style>
