
/**
 * 创建WebSocket连接
 * @param url 请求的WebSocket的url
 * @param callback 接收到消息后的回调操作
 * @returns 返回创建的WebSocket实例
 */
const openWebsocket = (
    url: string,
    onMessageCallback: (res: string) => void,
    onOpenCallback?: () => void,
    onCloseCallback?: () => void,
    onErrorCallback?: () => void
): WebSocket => {
    const socket = new WebSocket(url);
    socket.onopen = (ev: Event) => {
        if (onOpenCallback) {
            onOpenCallback();
        }
    };
    socket.onclose = (ev: CloseEvent) => {
        if (onCloseCallback) {
            onCloseCallback();
        }
    };
    socket.onerror = (ev: Event) => {
        if (onErrorCallback) {
            onErrorCallback();
        }
    };
    socket.onmessage = (ev: MessageEvent) => {
        onMessageCallback(ev.data);
    };
    return socket;
};

/**
 * 关闭WebSocket连接
 * @param webSocket webSocket实例
 */
const closeWebsocket = (webSocket: WebSocket| undefined): void => {
    if (webSocket) {
        webSocket.close();
    }
};

export { openWebsocket, closeWebsocket };
