<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트 데이터 이름"></app-header> -->
    <app-header 
      v-bind:propsdata="str"
      v-on:renew="renewStr"></app-header>
    <!-- 명명법 종류 모두 같은걸 의미함 -->
    <!-- <hello-world></hello-world>
    <HelloWorld></HelloWorld>
    <HelloWorld/> -->
    <!-- <app-header></app-header> -->
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
// 컴포넌트를 들고와서 밑에 반영해서 사용한다는것
export default {
  // 인스턴스 옵션 속성 or 컴포넌트 옵션속성 사용
  data: function(){
    return{
      str:'Header'
    }
  },
  components: {
    'app-header': AppHeader
  },
  methods:{
    renewStr: function(){
      this.str = 'hi'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
