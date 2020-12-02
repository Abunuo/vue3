<template>
  <div class="error">
    <p>NOT FOUNT</p>
  </div>
</template>

<script>
  import Button from '@/components/Button/button.vue'
  export default {
    name: 'Error',
    components: [
      Button
    ],
    data() {
      return {
        
      }
    },
  }
</script>

<style lang="scss" scoped>
  .error {
    color: red;
  }
</style>
