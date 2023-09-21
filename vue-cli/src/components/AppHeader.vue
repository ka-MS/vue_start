<template>
  <header>
    <h1>{{ propsdata }}</h1> 
    <!-- 상위 컴포넌트에서 데이터 가져옴 -->
    <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
    props:['propsdata'],
    methods:{
        sendEvent: function(){
            this.$emit('renew');
        }
    }

}
</script>

<style>

</style>