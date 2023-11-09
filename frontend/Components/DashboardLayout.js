"use client"
import '../styles/dashboardLayout.css';
import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import Header from './Header';
// import { Audio } from 'react-loader-spinner'

const { Content } = Layout;

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [cssLoaded, setCssLoaded] = useState(false);
  useEffect(() => {
    // Simulate loading of CSS (replace with actual CSS loading logic)
    setTimeout(() => {
      setCssLoaded(true);
    }, 1000); // Adjust the delay as needed
  }, []);

  return (
    <>
      {cssLoaded ? (
        <Layout>
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
          <Layout>
            <Header collapsed={collapsed} setCollapsed={setCollapsed} />
            <Content className="content-layout">
              {/* <Breadcrumb /> */}
              {children}
            </Content>
          </Layout>
        </Layout>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
          }}
        >
          {/* <Audio
            height="60"
            width="80"
            radius="10"
            color="Blue"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          /> */}
        </div>
      )}
    </>

  );
};
export default DashboardLayout;
