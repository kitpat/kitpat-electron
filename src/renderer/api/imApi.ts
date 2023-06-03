import { axiosService } from 'renderer/util/axios';
import { openWebsocket, closeWebsocket } from "renderer/util/websocket";

const IMWebSocketBaseIp: string = 'ws://localhost';

const imWebSocketMap = new Map<string, WebSocket>();

export function onOpenIMWebSocket(userId: string, onMessageCallback: (message: string) => void) {
    if (imWebSocketMap.get(userId) == undefined) {
        const url = IMWebSocketBaseIp + ':8080/' + userId;
        const socket: WebSocket = openWebsocket(url,
            (message: string) => {
                onMessageCallback(message);
            },
            () => {
                imWebSocketMap.set(userId, socket);
            },
            () => {
                closeWebsocket(socket);
                imWebSocketMap.delete(userId);
            },
            () => {
                closeWebsocket(socket);
                imWebSocketMap.delete(userId);
            }
        );
    }
}

export function onCloseIMWebSocket(userId: string) {
    const socket: WebSocket | undefined = imWebSocketMap.get(userId);
    closeWebsocket(socket);
}

export function friendList(): Promise<Common.Response<Set<string>>> {
    return axiosService.get('/imApi/im/friend/list');
}