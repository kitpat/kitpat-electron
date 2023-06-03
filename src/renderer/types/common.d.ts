// 接口请求和响应相关的通用类型定义
declare namespace Common {
    enum ResponseCode {
        Ok = 200,
    }
    interface PageRequest {
        pageNum: number,
        pageSize: number
    }

    interface PageData<T> {
        pageNum: number;
        pageSize: number;
        totals: number;
        records: Array<T>;
    }

    interface Response<T = {}> {
        code: number;
        desc: string;
        timestamp: string;
        path: string;
        data: T;
    }

    interface PageResponse<T> {
        code: number;
        desc: string;
        timestamp: string;
        path: string;
        data: PageData<T>;
    }
}

