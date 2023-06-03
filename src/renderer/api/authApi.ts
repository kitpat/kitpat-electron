import { axiosService } from 'renderer/util/axios';

export const exchangeToken = async (loginRequest: API.LoginRequest): Promise<Common.Response<string>> => {
    return axiosService.post('/authApi/auth/login', loginRequest);
}

export const queryUserInfo = async (token: string): Promise<Common.Response<API.UserInfo>> => {
    return axiosService.get('/authApi/auth/user?token=' + token);
}
