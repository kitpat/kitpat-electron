import { ChangeEvent, useEffect, useState } from "react";
import { Input, Space, Button } from 'antd';
import styles from './login.module.scss';
import initLoginBg from "./init";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import type { AppDispatch } from 'renderer/store';
import { saveUserInfo } from 'renderer/store/reducers/userReducer';

const Login: React.FC = () => {
    const [usernameVal, setUsernameVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');
    const dispatch: AppDispatch = useDispatch();
    const navigateTo = useNavigate();

    useEffect(() => {
        // 加载完这个组件之后，加载背景
        initLoginBg();
        window.onresize = function () { initLoginBg() };
    }, []);

    const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsernameVal(e.target.value);
    }
    const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordVal(e.target.value);
    }

    const gotoLogin = async () => {
        let userInfo: API.UserInfo = {
            'username': usernameVal,
            'avatar': passwordVal
        };
        dispatch(saveUserInfo(userInfo));
        navigateTo('/');
    }

    return (
        <div className={styles.loginPage}>
            {/* 存放星空背景 */}
            <canvas id="canvas" style={{ display: "block" }}></canvas>
            {/* 登录盒子 */}
            <div className={styles.loginBox + " loginbox"}>
                {/* 标题部分 */}
                <div className={styles.title}>
                    <h1>KitPat</h1>
                </div>
                {/* 表单部分 */}
                <div className="form">
                    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                        <Input placeholder="用户名" onChange={usernameChange} />
                        <Input.Password placeholder="密码" onChange={passwordChange} />
                        <Button type="primary" className="loginBtn" block onClick={gotoLogin}>登录</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default Login;