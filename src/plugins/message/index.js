import {
	createVNode,
	render
} from 'vue'
import MessageConstructor from './message.vue';

let MessageInstance = null;

let initInstance = () => {
	let vnode = createVNode(MessageConstructor);
	render(vnode, document.body)
	MessageInstance = vnode.component;
}

let showMsgBox = (options) => {
	if (!MessageInstance) {
		initInstance();
	}
	// setupState里面包含的是 setUp 函数里面返回的变量，ctx 返回的是实例所有的变量
	MessageInstance.setupState.init(options)
}

function Message(options) {
	showMsgBox(options)
}
Message.alert = (options) => {
	if (typeof options == 'string') {
		options = {
			type: 'alert',
			content: options,
		}
	}
	showMsgBox(options)
}
Message.confirm = (options) => {
	if (typeof options == 'string') {
		options = {
			type: 'confirm',
			content: options,
		}
	}
	showMsgBox(options)
}

export const name = '$message';

export default Message
