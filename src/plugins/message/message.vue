<template>
	<div class="message-container" v-if="showFlag">
		<section class="message-inner" v-if="options.type !== 'tip'">
			<header class="header-inner">
				{{ options.title }}
			</header>
			<section class="content-inner">
				{{ options.content }}
			</section>
			<section class="operations-inner">
				<p
					class="cancel"
					v-if="options.type == 'confirm'"
					@click="cancelCallback"
				>
					{{ options.cancelText }}
				</p>
				<p class="confirm" @click="confirmCallback">
					{{ options.confirmText }}
				</p>
			</section>
		</section>
		<section v-else class="tip-inner" :style="{ animation: animation1 }">
			{{ options.content }}
		</section>
	</div>
</template>

<script>
	import { defineComponent, reactive, computed, toRefs } from "vue";
	export default defineComponent({
		name: "Message",
		setup(props) {
			const options = reactive({
				title: "提示",
				content: "请配置显示文案",
				type: "tip",
				confirmText: "确认",
				cancelText: "取消",
				confirm: null,
				cancel: null,
				durations: 3000,
			});
			const state = reactive({
				showFlag: false,  	// 弹框显示隐藏
				toggleAnimations: false,  // tip专用
			})

			const animation1 = computed(() => {
				return state.toggleAnimations
					? `tipAnimation ${options.durations / 1000}s`
					: "";
			});

			function init(custom_options) {
				if (state.showFlag) return;
				if(typeof custom_options == 'string') {
					custom_options = {
						content: custom_options
					}
				}
				if (custom_options && !custom_options.content && custom_options.content == "") {
					throw new TypeError(
						"Pleace set correctly content, content must not empty!"
					);
				}

				Object.assign(options, custom_options);
				showMessageWrap();

				if (options.type == "tip") {
					state.toggleAnimations = true;
					setTimeout(() => {
						hideMessageWrap();
					}, options.durations);
				}
			}

			function confirmCallback() {
				options.confirm && options.confirm();
				hideMessageWrap();
			}

			function cancelCallback() {
				options.cancel && options.cancel();
				hideMessageWrap();
			}

			function showMessageWrap() {
				state.showFlag = true;
			}

			function hideMessageWrap() {
				state.showFlag = false;
			}

			return {
				options,
				...toRefs(state),
				animation1,
				init,
				confirmCallback,
				cancelCallback,
				showMessageWrap,
				hideMessageWrap
			};
		}
	});
</script>

<style lang="scss" scoped>
	.message-container {
		max-width: 50%;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 30px;
		> section {
			box-shadow: 0 0 20px 0 #dee0e1;
			border-radius: 8px;
		}
		.message-inner {
			width: 260px;
			height: auto;
			color: #303133;
			background: #fff;
			padding: 0 40px;
			.header-inner {
				text-align: center;
				font-size: 36px;
				line-height: 88px;
			}
			.content-inner {
				min-height: 80px;
				color: #606266;
				font-size: 30px;
			}
			.operations-inner {
				display: flex;
				width: 100%;
				border-top: 1px solid #eee;
				margin-top: 40px;
				p {
					text-align: center;
					line-height: 88px;
					cursor: pointer;
					&.cancel {
						width: 50%;
					}
					&.confirm {
						flex: 1;
						color: #00d6a6;
					}
				}
			}
		}
		.tip-inner {
			padding: 20px 40px;
			min-width: 200px;
			background: rgba(0, 0, 0, 0);
			opacity: 0;
			color: #fff;
			text-align: center;
		}
	}
</style>
<style lang="scss">
	@keyframes tipAnimation {
		0% {
			background: rgba(0, 0, 0, 0);
			opacity: 0;
		}
		30% {
			background: rgba(0, 0, 0, 0.5);
			opacity: 1;
		}
		70% {
			background: rgba(0, 0, 0, 0.5);
			opacity: 1;
		}
		100% {
			background: rgba(0, 0, 0, 0);
			opacity: 0;
		}
	}
</style>
