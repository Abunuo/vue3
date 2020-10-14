<template>
  <div class="main-container">
    <p>这是首页{{a}}</p>
  </div>
</template>

<script>
  import { ref } from 'vue';
  export default {
    name: 'index',
    setup(props, context) {
      let a = ref(12)
      return {
        a
      }
    },
  }
</script>
 
<style lang="scss" scoped>
  .main-container {
    color: blue;
    font-size: $base-font-size;
  }
</style>
