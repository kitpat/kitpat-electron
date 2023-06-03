import axios from 'axios';
import type { AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { message } from 'antd';

const axiosInstance = axios.create({
    timeout: 5000,    //超时配置
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['authorization'] = token;
        }
        return config;
    },
    (error: AxiosError) => {
        message.error(error.message);
        return Promise.reject(error);
    }
);

// 添加响应拦截器
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        // 对登录状态异常的code做特殊处理
        return response;
    },
    (error: AxiosError) => {
        // 此处处理请求响应http异常
        message.error(error.message);
        return Promise.reject(error);
    }
);

const axiosService = {
    get<T = any>(url: string, params?: any): Promise<Common.Response<T>> {
        const axiosRequestConfig: AxiosRequestConfig = {
            params: params,
        };
        return axiosInstance.get<Response, AxiosResponse<Common.Response<T>>>(url, axiosRequestConfig)
            .then((res: AxiosResponse<Common.Response<T>>) => {
                // 接口返回的数据在response.data中。
                return res.data;
            })
            .catch((error: AxiosError) => {
                return Promise.reject(error);
            });
    },
    post<T = any>(url: string, data?: any): Promise<Common.Response<T>> {
        return axiosInstance.post(url, data)
            .then((res: AxiosResponse<Common.Response<T>>) => {
                return res.data;
            })
            .catch((error: AxiosError) => {
                return Promise.reject(error);
            });
    }
}

export { axiosService };
