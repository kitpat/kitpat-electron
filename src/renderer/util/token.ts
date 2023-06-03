// 封装本地存储的操作
const TOKEN_KEY = 'token';

const TokenManager = {
    // 获取 token
    getToken: (): string => {
        let token = localStorage.getItem(TOKEN_KEY);
        return token == null ? '' : token;
    },

    // 本地存储 token
    setToken: (token: string): void => {
        localStorage.setItem(TOKEN_KEY, token);
    },

    // 删除 token
    removeToken: (): void => {
        localStorage.removeItem(TOKEN_KEY);
    },

    // 判断有无 token
    hasToken: (): boolean => {
        return !!localStorage.getItem(TOKEN_KEY);
    }
};
export { TokenManager };