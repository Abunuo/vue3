/**
   注意：组件调用不能传多余的 props 和 emits，多余的必须用 $attrs 承接
 */

<template>
	<p style="color: red">共有数据 {{ studentsLength_log }} 组</p>
	<p
		v-for="item in students"
		:key="item.name"
		@click="emitAddAge(item)"
		:ref="listRef"
	>
		{{ item.name }}的年龄：{{ item.age }} {{ item.name }}的性别：{{ item.sex }}
	</p>
</template>

<script lang="ts">
	import {
		defineComponent,
		inject,
		reactive,
		onBeforeUpdate,
	} from "vue";

	export default defineComponent({
		name: 'PList',
		props:[ 'students' ],
		emits: ["addAge"],
		setup(props, context) {
			const studentsLength_log = inject('studentsLength');
      let itemRefs: any[] = reactive([]);
      
      function emitAddAge(item) {
        context.emit("addAge", item);
      }
      function listRef(el) {
        itemRefs.push(el);
			};

			onBeforeUpdate(() => {
        itemRefs = [];
      });

			return {
        studentsLength_log,
        emitAddAge,
        listRef
			};
		}
	});
</script>