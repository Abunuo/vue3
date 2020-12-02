<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade">
      <component :is="Component" :router="route" />
    </transition>
  </router-view>
</template>

<script>
  export default {
    name: 'App',
    setup(props, context) {
      
    }
  }
</script>

<style lang="scss">
  
</style>
