<template>
  <div class="main-container">
    <p class="name">{{name}}:</p>
    <p>{{name}}的年龄：{{person.age}}</p>
    <p>{{name}}的性别：{{person.sex}}</p>
    <p v-for="item in students" :key="item" @click="addAge(item)">
      {{item.name}}的年龄：{{item.age}}
      {{item.name}}的性别：{{item.sex}}
    </p>
    <button type="button" name="button" @click="addStudent">新增同学</button>
  </div>
</template>

<script>
  import vue from 'vue'
  export default {
    name: 'Index',
    data() {
      return {
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
        }]
      }
    },
    created() {
      this.$watch('students', (newVal, oldVal) => {
        console.log('$watch', newVal);
      }, {
        deep: true
      })
    },
    watch: {
      students: {
        handler(newVal) {
          console.log('watch', newVal);
        },
        deep: true
      }
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
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main-container {
    padding: 30px;
    font-size: $base-font-size;
    .name {
      color: red;
    }
  }
</style>
