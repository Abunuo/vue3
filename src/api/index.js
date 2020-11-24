// api.js
const apiList = [
    '/userGateway/user/getPublicKey',  // 登入页面获取公钥
    '/userGateway/userSentry/login',  // 用户登录
    '/userGateway/userSentry/loginByCode',  // 验证码登录
]

let apiName, API = {}
apiList.forEach(path => {
    // 使用正则取到接口路径的最后一个子串，比如: getPublicKey
    apiName = /(?<=\/)[^/]+$/.exec(path)[0]      
    API[apiName] = (data) => {
        return http({url: path}, data)
    }
})

export default API