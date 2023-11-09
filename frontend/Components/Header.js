"use client"
import React, { useEffect } from 'react';
import { Layout, Avatar, Button, theme, Row, Col, Dropdown, Space } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { UserOutlined, BellOutlined, DownOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import profileStore from '@/store/profileStore';
import sessionStore from '@/store/authStore';
import '../styles/commonStyle.css';
const { Header } = Layout;

const Headerbar = ({ collapsed, setCollapsed }) => {
  const router = useRouter();
  const session = sessionStore((store) => store.setSession);
  const getProfile = profileStore((store) => store.setProfile);
  const getProfileData = profileStore((store) => store.getProfileData?.[0]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const handleLogoutClick = () => {
    localStorage.clear();
    router.push('/login');
  };
  const handleProfileClick = () => {
    router.push('/profile');
  };
  const handleCompanyProfileClick = () => {
    router.push('/company-profile');
  };
  const items = [
    {
      label: 'Profile',
      key: '0',
      onClick: handleProfileClick,
    },
    {
      label: 'Company Profile',
      key: '1',
      onClick: handleCompanyProfileClick,
    },

    {
      type: 'divider',
    },
    {
      label: 'Log out',
      key: '3',
      onClick: handleLogoutClick,
    },
  ];
  const sessionFunction = async () => {
    await session();
  };
  const getProfileFunc = async () => {
    await getProfile();
  };
  useEffect(() => {
    (async () => {
      await sessionFunction();
      await getProfileFunc();
    })();
  }, []);

  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
    >
      <Row>
        <Col xs={4} sm={4} md={6} lg={6} className="left-side-content">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => {
              setCollapsed(!collapsed);
            }}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Col>
        <Col className="right-side-content" xs={24} sm={24} md={18} lg={18}>
          <Row justify="space-between">
            <Col span={6}>
              <div className="header-components">
                <BellOutlined />
              </div>
            </Col>
            <Col span={6}>
              <div className="header-components header-avtar">
                <Avatar icon={<UserOutlined />} />
              </div>
            </Col>
            <Col span={12}>
              <div className="dropdown">
                <Dropdown
                  menu={{
                    items,
                  }}
                  trigger={['click']}
                  placement="bottom"
                >
                  <div onClick={(e) => e.preventDefault()}>
                    <Space>
                      <div className="dropdown-header">
                        <span style={{ lineHeight: '15px' }}>
                          {getProfileData?.first_name
                            ? getProfileData?.first_name + ' '
                            : 'Unknown' + ' '}
                          {getProfileData?.last_name ? getProfileData?.last_name : 'User'}
                        </span>
                        <span className="text-gray">{getProfileData?.role_name}</span>
                      </div>
                      <DownOutlined />
                    </Space>
                  </div>
                </Dropdown>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default Headerbar;
