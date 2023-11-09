"use client"
import '../styles/dashboardLayout.css';
import React, { useState } from 'react';
import Link from 'next/link';
import { Layout, Menu } from 'antd';
// import Logo from '../icon/Logo.svg';
import Logo from "../icon/Integrated-logo.png";
import Image from 'next/image';
import {
  CalendarIcon,
  Cog6ToothIcon,
  UsersIcon,
  Squares2X2Icon,
  CircleStackIcon,
  BookOpenIcon,
  WrenchIcon,
  DocumentTextIcon,
  UserIcon,
  BuildingStorefrontIcon,
} from '@heroicons/react/24/outline';
import { useRouter ,usePathname} from 'next/navigation';
import { ArrowLeftOutlined } from '@ant-design/icons';
const { Sider } = Layout;

const rootSubmenuKeys = [
  '/configure/customers',
  '/configure/vendors',
  '/configure/equipment-management',
  '/configure/project-management',
  '/configure/task-management',
  '/configure/qhse-management',
];
const Sidebar = ({ collapsed, setCollapsed }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isConfigured = pathname === '/configure';
  const [openKeys, setOpenKeys] = useState(['']);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const handleBreakPoint = (broken) => {
    setCollapsed(broken);
  };

  return (
    <Sider
      className={`sidebar ${collapsed ? 'collapsed' : 'expanded'}`}
      trigger={null}
      collapsible
      collapsed={collapsed}
      breakpoint="md"
      onBreakpoint={(broken) => handleBreakPoint(broken)}
    >
      <div className="demo-logo-vertical">
        <Image className='integrated-logo' src={Logo} alt="Logo" style={collapsed && { width: '83px' }} />
      </div>
      <Menu
        theme="light"
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        defaultSelectedKeys={pathname}
        items={
          isConfigured
            ? [
                {
                  key: '/configure/dashboard',
                  icon: <ArrowLeftOutlined className="sidebar-icon" />,
                  label: <Link href="/dashboard">Back</Link>,
                },
                {
                  key: '/configure/customers',
                  icon: <UserIcon className="sidebar-icon" />,
                  label: 'Customers',
                  children: [
                    {
                      key: '/configure/customer-types',
                      label: <Link href="/configure/customer-types">Customer Types</Link>,
                    },
                  ],
                },
                {
                  key: '/configure/vendors',
                  icon: <BuildingStorefrontIcon className="sidebar-icon" />,
                  label: 'Vendors',
                  children: [
                    {
                      key: '/configure/vendor-types',
                      label: <Link href="/configure/vendor-types">Vendor Types</Link>,
                    },
                  ],
                },
                {
                  key: '/configure/equipment-management',
                  icon: <WrenchIcon className="sidebar-icon" />,
                  label: 'Equipment Management',
                  children: [
                    {
                      key: '/configure/equipment-categories',
                      label: <Link href="/configure/equipment-categories">Categories</Link>,
                    },
                    {
                      key: '/configure/equipment-subcategories',
                      label: <Link href="/configure/equipment-subcategories">Subcategories</Link>,
                    },
                    {
                      key: '/configure/equipment-manufacturer',
                      label: <Link href="/configure/equipment-manufacturer">Manufacturer</Link>,
                    },
                    {
                      key: '/configure/equipment-warehouse',
                      label: <Link href="/configure/equipment-warehouse">Warehouse</Link>,
                    },
                  ],
                },
                {
                  key: '/configure/project-management',
                  icon: <BookOpenIcon className="sidebar-icon" />,
                  label: 'Project Management',
                  children: [
                    {
                      key: '/configure/project-types',
                      label: <Link href="/configure/project-types">Project Types</Link>,
                    },
                    {
                      key: '/configure/qhse-location',
                      label: <Link href="/configure/qhse-location">Location</Link>,
                    },
                  ],
                },
                {
                  key: '/configure/task-management',
                  icon: <CircleStackIcon className="sidebar-icon" />,
                  label: 'Task Management',
                  children: [
                    {
                      key: '/configure/task-status',
                      label: <Link href="/configure/task-status">Status</Link>,
                    },
                  ],
                },
                {
                  key: '/configure/qhse-management',
                  icon: <DocumentTextIcon className="sidebar-icon" />,
                  label: 'QHSE Management',
                  children: [
                    {
                      key: '/configure/qhse-severity',
                      label: <Link href="/configure/qhse-severity">Severity</Link>,
                    },
                    {
                      key: '/configure/qhse-likelihood',
                      label: <Link href="/configure/qhse-likelihood">Likelihood</Link>,
                    },
                    {
                      key: '/configure/qhse-status',
                      label: <Link href="/configure/qhse-status">Status</Link>,
                    },
                    {
                      key: '/configure/qhse-category',
                      label: <Link href="/configure/qhse-category">Category</Link>,
                    },
                    {
                      key: '/configure/qhse-incident-type',
                      label: <Link href="/configure/qhse-incident-type">Incident Type</Link>,
                    },
                  ],
                },
              ]
            : [
                {
                  key: '/role-management',
                  icon: <Squares2X2Icon className="sidebar-icon" />,
                  label: <Link href="/role-management">Role Management</Link>,
                },
                {
                  key: '/project-management',
                  icon: <BookOpenIcon className="sidebar-icon" />,
                  label: <Link href="/project-management">Project Management</Link>,
                },
                {
                  key: '/tasks',
                  icon: <CircleStackIcon className="sidebar-icon" />,
                  label: <Link href="/tasks">Tasks</Link>,
                },
                // {
                //   key: '/equipment-management',
                //   icon: <WrenchIcon className="sidebar-icon" />,
                //   label: <Link href="/equipment-management">Equipment Management</Link>,
                // },
                // {
                //   key: '/qhse-management',
                //   icon: <DocumentTextIcon className="sidebar-icon" />,
                //   label: <Link href="/qhse-management">QHSE Management</Link>,
                // },
                // {
                //   key: '/customers',
                //   icon: <UserIcon className="sidebar-icon" />,
                //   label: <Link href="/customers">Customers</Link>,
                // },
                // {
                //   key: '/vendors',
                //   icon: <BuildingStorefrontIcon className="sidebar-icon" />,
                //   label: <Link href="/vendors">Vendors</Link>,
                // },
                // {
                //   key: '/calender',
                //   icon: <CalendarIcon className="sidebar-icon" />,
                //   label: <Link href="/calender">Calender</Link>,
                // },
                // {
                //   key: '/people-teams',
                //   icon: <UsersIcon className="sidebar-icon" />,
                //   label: 'People & Teams',
                //   children: [
                //     {
                //       key: 'people',
                //       label: <Link href="/people">People</Link>,
                //     },
                //     {
                //       key: 'temas',
                //       label: <Link href="/teams">Teams</Link>,
                //     },
                //   ],
                // },
                // {
                //   key: '/reports',
                //   icon: <DocumentTextIcon className="sidebar-icon" />,
                //   label: <Link href="/reports">Reports</Link>,
                // },
                // {
                //   key: '/support',
                //   icon: <Cog6ToothIcon className="sidebar-icon" />,
                //   label: <Link href="/support">Support</Link>,
                // },
                // {
                //   key: '/configure',
                //   icon: <Cog6ToothIcon className="sidebar-icon" />,
                //   label: <Link href="/configure">Configure</Link>,
                // },
              ]
        }
      />
    </Sider>
  );
};

export default Sidebar;
