import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 아래와 같은 형태다
// var App = {
//   template: '<div>app</div>'
// }

new Vue({
  render: h => h(App),
}).$mount('#app')

/* 위와 동일한 코드
new Vue({
  el:'#app',
  render: h => h(App)
})
*/