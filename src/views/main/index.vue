<template>
  <div class="main-container">
    <p>{{name}}的年龄：{{person.age}}</p>
    <p>{{name}}的性别：{{person.sex}}</p>
    <p-list :students="students" @addAge="addAge"></p-list>
    <button type="button" name="button" @click="addStudent">新增同学</button>
  </div>
</template>

<script>
  import { computed } from 'vue';
  import PList from './components/list.vue';
  import emitter from './emitter';
  export default {
    name: 'Index',
    inheritAttrs: false,
    components: {
      PList
    },
    provide() {
      return {
        studentsLength: computed(() => this.students.length)
      }
    },
    data() {
      return {
        number: 0,
        name: '小明',
        person: {
          age: 23,
          sex: '男'
        },
        students: [{
          name: '小李',
          age: 21,
          sex: '男'
        }, {
          name: '小龙',
          age: 12,
          sex: '男'
        }, {
          name: ' 小红',
          age: 18,
          sex: '女'
        }],
      }
    },
    created() {
      emitter.on('message', (message) => {
        console.log('message is: ', message);
      })
    },
    methods: {
      addAge(item) {
        item.age ++;
      },
      addStudent() {
        const random = Math.random();
        this.students.push({
          name: '小' + ~~(random * 20),
          age: 10 + ~~(random * 20),
          sex: ~~(random * 10) % 2 == 0 ? '男' : '女'
        });
        emitter.emit('message',  `小${~~(random * 20)}被添加` )
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main-container {
    padding: 30px;
    font-size: $base-font-size;
  }
</style>
