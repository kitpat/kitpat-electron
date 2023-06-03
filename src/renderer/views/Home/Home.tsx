import React, { useState } from 'react';
import './App.css';
import { ConstantBackoff } from 'ws/backoff/constantbackoff';
import { WebsocketBuilder } from 'ws/websocketBuilder';
import { Msg, MsgContentType, MsgType } from 'proto/msg';
import { useSelector } from "react-redux";
import type { RootState } from 'renderer/store';

const Home: React.FC = () => {
  const [msg, setMsg] = useState('');
  const userInfo: API.UserInfo = useSelector((state: RootState) => ({
    username: state.user.username
  }));

  const url = 'ws://127.0.0.1:2345/kitpat';
  const ws = new WebsocketBuilder(url)
    .withBackoff(new ConstantBackoff(1000))
    .binaryType('arraybuffer')
    .onOpen((instance, event) => {
      console.log('connected to ws server at: ', url)
    })
    .onClose((instance, event) => {
      console.log('closing ws connection...');
    })
    .onError((instance, event) => {
      console.error('error occured!');
    })
    .onMessage((instance, event) => {
      console.log('receive msg');
      const reader = new FileReader();
      reader.readAsArrayBuffer(event.data);
      reader.onload = () => {
        const arrayBuffer = reader.result;
        console.log(Msg.decode(new Uint8Array(arrayBuffer as ArrayBuffer)));
      };
    })
    .build();

  function sendMsg(): void {
    console.log('sending msg:', msg);

    const textMsg: Msg = {
      head: {
        msgId: '1',
        msgType: MsgType.SINGLE_CHAT,
        msgContentType: MsgContentType.TXT,
        fromId: userInfo.username,
        toId: '222',
        timestamp: new Date().getTime(),
        status: 1,
        extend: 'none',
      },
      body: msg,
    };

    ws.send(Msg.encode(textMsg).finish());
  }

  return (
    <div>
      <div className="Hello">Home</div>
      <h1>{userInfo.username}</h1>
      <div className="Hello">
        <textarea
          value={msg}
          onChange={(e) => {
            setMsg(e.currentTarget.value);
          }}
        />
      </div>
      <div className="Hello">
        <button onClick={sendMsg} type="button">
          手动发送
        </button>
      </div>
    </div>
  );
}

export default Home;