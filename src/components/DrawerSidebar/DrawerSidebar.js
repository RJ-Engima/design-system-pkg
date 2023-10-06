import React,{ useState,useEffect } from 'react';
import { FileOutlined, PieChartOutlined,MailOutlined,
  AppstoreOutlined,DesktopOutlined,SettingOutlined,TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {Outlet,Link,useLocation} from 'react-router-dom';
import Icon from '@mui/material/Icon';
import './Drawer.css';

const { Header, Content,Footer, Sider } = Layout;
const DrawerSidebar = (props) => {

  let location = useLocation();

const pathName = location.pathname;

  const [openKeys, setOpenKeys] = useState(['']);
  let childKeys = [];
  let parentKeys = [];

  const {layoutClass,
      className,
      showHeader,
      showFooter,
      footerEnd,
      items,
      navBar,
      siderTheme,
      menuTheme,
      dashBoardHeaderIcon,
      dashBoardHeaderText,
      selectedKeys,
      defaultSelectedKeys,
      collapsed,
      collapsibleMenu,
      rootSubmenuKeys
    } = props;

  useEffect(() => {
    if(childKeys.includes(pathName)) {
      setOpenKeys([''])
    }
},[pathName])

// Controlled Collapesible

const onOpenChange = (keys) => {
  function extractKeys(menuItems, parentKey = '') {
    menuItems.forEach((item) => {
      if (item.key) {
        if (item.key.includes('/')) {
          childKeys.push(item.key);
        } else {
          parentKeys.push(item.key);
        }
      }
      if (item.children && Array.isArray(item.children)) {
        extractKeys(item.children, item.key);
      }
    });
  }
  extractKeys(items);
  // console.log('Parent Keys:', parentKeys);
  // console.log('Child Keys:', childKeys);

  const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
  if (parentKeys.indexOf(latestOpenKey) === -1) {
    setOpenKeys(keys);
  } else {
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  }
};

  return (
    <Layout className={layoutClass}>
      <Sider
      style={{
    }}
      className={className}
      collapsible
      // collapsed={collapsed}
      onCollapse={collapsed}
      theme={siderTheme}
      {...props}>
        <div className="dashboard-header">
            <ul>
              <li>
                  <Icon children={dashBoardHeaderIcon} />
                <p>{dashBoardHeaderText}</p>
                </li>
            </ul>
        </div>
        <Menu
        {...props}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        selectedKeys={selectedKeys}
        defaultSelectedKeys={defaultSelectedKeys}
        items={items}
        theme={menuTheme}
        mode="inline"
        />
      </Sider>
      <Layout>
       {showHeader?
       <Header style={{padding: 0,position: 'sticky',top: 0,zIndex: 999}}>{navBar}</Header> : ''}
        <Content>
          {/* // style={{height: '100vh',overflow: "auto"}} */}

           {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          {/* <div
            style={{
              padding: 24,
              minHeight: 360,
              background: 'grey',
            }}
          >
            Bill is a cat.
          </div>  */}

          <Outlet />
        </Content>
        {showFooter ?
        <Footer style={{position: 'sticky',bottom: 0,zIndex: 999}}>
        {footerEnd}
        </Footer>   : ''
        }

      </Layout>
    </Layout>
  );
};
export default DrawerSidebar;