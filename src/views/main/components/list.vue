/**
   注意：组件调用不能传多余的 props 和 emits，多余的必须用 $attrs 承接
 */

<template>
  <p style="color: red;">共有数据 {{studentsLength_log}} 组</p>
  <p v-for="item in students" :key="item.name" @click="emitAddAge(item)" :ref="listRef">
    {{item.name}}的年龄：{{item.age}}
    {{item.name}}的性别：{{item.sex}}
  </p>
</template>

<script>
export default {
  name: 'PList',
  props: [ 'students'],
  emits: [ 'addAge' ],
  inject: [ 'studentsLength' ],
  data() {
    return {
			studentsLength_log: this.studentsLength,
			itemRefs: []
		}
  },
  beforeUpdate() {
    this.itemRefs = []
  },
  methods: {
    emitAddAge(item) {
      this.$emit('addAge', item)
    },
    listRef(el) {
      this.itemRefs.push(el)
    }
  }
}
</script>