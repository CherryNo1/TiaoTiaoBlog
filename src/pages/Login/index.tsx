import {
  AlipayOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoOutlined,
  UserOutlined,
  WeiboOutlined,
} from '@ant-design/icons';
import {
  LoginFormPage,
  ProFormCaptcha,
  ProFormCascader,
  ProFormCheckbox,
  ProFormColorPicker,
  ProFormItem,
  ProFormMoney,
  ProFormText,
} from '@ant-design/pro-components';
import { Alert, Button, Divider, Image, Input, message, Space, Spin, Tabs } from 'antd';
import type { CSSProperties } from 'react';
import React, { useState } from 'react';
import style from './index.scss'
import Logo from '@/Icons/Logo';
import { useLocation, useNavigate } from 'react-router-dom';
import { ResponseData } from '@/typings';
import { User } from '@/api/index'
type LoginType = 'phone' | 'account';

const iconStyles: CSSProperties = {
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '18px',
  verticalAlign: 'middle',
  cursor: 'pointer',
};


export default () => {
  //默认手机登录
  const [loginType, setLoginType] = useState<LoginType>('account');
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    setLoading(true)
    User.login(values)
      .then((res: ResponseData) => {
        var token = res.data;
        if (token == null) {
          //会被catch捕获
          return Promise.reject("账号或密码不正确")
        }
        localStorage.setItem("Authorization", res.data);
        navigate("/home", { state: "alien" });
        setLoading(false)
      })
      .catch((err) => {
        setErrMsg(err)
        setLoading(false)
      });
  };
  return (
    <div style={{ backgroundColor: 'white', height: 'calc(100vh)' }}>

      <LoginFormPage
        onFinish={onFinish}
        backgroundImageUrl="https://api.dujin.org/bing/1920.php"
        logo={<Logo />}
        title="TiaoTiao"
        subTitle={"一个安静的博客网站"}
        style={{
          backgroundSize: "cover"
        }}
        //其他登陆方式
        actions={
          <div className='actions'
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >

            <Divider plain>
              <span style={{ color: '#CCC', fontWeight: 'normal', fontSize: 14 }}>
                其他登录方式
              </span>
            </Divider>
            <Space align="center" size={24}>
              <div className={style.alipay}>
                <AlipayOutlined style={{ ...iconStyles, color: '#1677FF' }} />
              </div>
              <div className='taobao'   >
                <TaobaoOutlined style={{ ...iconStyles, color: '#FF6A10' }} />
              </div>
              <div className='weibo'>
                <WeiboOutlined style={{ ...iconStyles, color: '#333333' }} />
              </div>
            </Space>
          </div>
        }

        message={errMsg != null && <Alert type='error' message={errMsg} />}
      >
        <Spin spinning={loading}>
          <Tabs
            centered
            activeKey={loginType}
            onChange={(activeKey) => setLoginType(activeKey as LoginType)}
            items={
              [
                { key: 'account', label: '账号密码登录' },
                { key: 'phone', label: '手机号登录' },
              ]
            }
          />

          {loginType === 'account' && (
            <>

              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={'prefixIcon'} />,
                }}
                placeholder={'用户名'}
                rules={[
                  {
                    required: true,
                    message: '请输入用户名!',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                placeholder={'密码'}
                rules={[
                  {
                    required: true,
                    message: '请输入密码！',
                  },
                ]}
              />
            </>
          )}

          {loginType === 'phone' && (
            <>
              <ProFormText
                fieldProps={{
                  size: 'large',
                  prefix: <MobileOutlined className={'prefixIcon'} />,
                }}
                name="mobile"
                placeholder={'手机号'}
                rules={[
                  {
                    required: true,
                    message: '请输入手机号！',
                  },
                  {
                    pattern: /^1\d{10}$/,
                    message: '手机号格式错误！',
                  },
                ]}
              />
              <ProFormCaptcha
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                captchaProps={{
                  size: 'large',
                }}
                placeholder={'请输入验证码'}
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `${count} ${'获取验证码'}`;
                  }
                  return '获取验证码';
                }}
                name="captcha"
                rules={[
                  {
                    required: true,
                    message: '请输入验证码！',
                  },
                ]}
                onGetCaptcha={async () => {
                  message.success('获取验证码成功！验证码为：1234');
                }}
              />
            </>
          )}
        </Spin>
        <div
          style={{
            marginBlockEnd: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <a
            style={{
              float: 'right',
            }}
          >
            忘记密码
          </a>
        </div>

      </LoginFormPage>

    </div>
  );
};