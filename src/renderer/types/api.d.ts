// 具体业务的接口请求或响应中用到的类型
declare namespace API {
    type LoginRequest = {
        username: string,
        password: string
    }
    type UserInfo = {
        username: string,
        avatar?: string,
        roles?: string[]
    }
}