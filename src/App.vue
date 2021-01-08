<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade">
      <component :is="Component" :route="route"/>
    </transition>
  </router-view>
</template>

<script lang="ts">
  export default {
    name: 'App',
    setup(props, context) {
      
    }
  }
</script>

<style lang="scss">
  
</style>
