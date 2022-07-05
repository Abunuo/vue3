<template>
  <div class="main-container">
    <p>{{name}}的年龄：{{person.age}}</p>
    <p>{{name}}的性别：{{person.sex}}</p>
    <p-list :students="students" @addAge="addAge"></p-list>
    <button type="button" name="button" @click="addStudent">新增同学</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, ref, reactive, toRefs, provide, ComputedRef } from 'vue';
  import PList from './components/list.vue';
  import emitter from './emitter';

  interface Person {
    name: string,
    age: number,
    sex: string
  }

  export default defineComponent({
    name: 'Index',
    inheritAttrs: false,
    components: {
      PList
    },
    created() {
      emitter.on('message', (message) => {
        
        console.log('message is: ', message);
      })
    },
    setup() {
      const state = reactive({
        number: 0,
        name: '小明',
        person: {
          name: '大哥',
          age: 23,
          sex: '男'
        } as Person,
        students: [{
          name: '小李',
          age: 21,
          sex: '男'
        }] as Person[]
      });
      const studentsLength: ComputedRef<number> = computed(() => state.students.length)

      provide('studentsLength', studentsLength);

      function addAge(item: Person): void {
        item.age ++;
      }

      function addStudent(): void {
        const random = Math.random();
        state.students.push({
          name: '小' + ~~(random * 20),
          age: 10 + ~~(random * 20),
          sex: ~~(random * 10) % 2 == 0 ? '男' : '女'
        });
        emitter.emit('message',  `小${~~(random * 20)}被添加` )
      }

      return {
        ...toRefs(state),
        addAge,
        addStudent
      }
    }
  })
</script>

<style lang="scss" scoped>
  .main-container {
    padding: 30px;
    font-size: $base-font-size;
  }
</style>
