<template>
    <div>
        <!-- div엘리멘트는 최상위에는 하나만 있어야함 -->
        app
    </div>
</template>

<script>
// new Vue({
//     data:{
//         str:'hi'
//     }
// }) 아래와 동일한코드

export default {
    // javascript
    // 컴포넌트를 재사용하겠다는 것
    data: function() {
        return {
            str: 'hi'
        }
    }
}
</script>

<style>
    /* css */
</style>