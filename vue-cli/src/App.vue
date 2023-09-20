<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <!-- 모두 같은걸 의미함 -->
    <hello-world></hello-world>
    <HelloWorld></HelloWorld>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// 컴포넌트를 들고와서 밑에 반영해서 사용한다는것
export default {
  // 인스턴스 옵션 속성 or 컴포넌트 옵션속성 사용
  name: 'App',
  components: {
    HelloWorld,
    'hello-world': HelloWorld
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
