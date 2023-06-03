import React from 'react';
// 正确的样式引入顺序：初始化样式->UI框架的样式->自定义全局样式->组件的样式
import "reset-css"; // 样式初始化，一般放在最前面。
import "renderer/assets/styles/global.scss";
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // 状态管理
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from "renderer/store";
import Home from 'renderer/views/Home/Home';
import Login from 'renderer/views/Login';

const APP: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <MemoryRouter initialEntries={["/login"]}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </MemoryRouter>
        </React.StrictMode>
      </PersistGate>
    </Provider>
  );
}

export default APP;