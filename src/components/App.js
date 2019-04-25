import React, { useState, useEffect, useCallback } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from "react-router-dom";
import { routes, allRoutesFn } from "Routes";
import { Button } from "antd";
import styles from 'Less/style.module';
import { useDispatch, useMappedState } from "redux-react-hook";
const { Header, Content, Footer } = Layout;


function App() {

    const dispatch = useDispatch();

    const [height, setHeight] = useState(0);
    useEffect(() => {
        let windowHeight = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        setHeight(windowHeight);

        const container = document.getElementById('container');
        const width = container && container.offsetWidth;
        dispatch({ type: 'CONTAINER_SIZE', width: width, height: windowHeight - 187 - 48 });

    }, [])

    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1"><Link to="./add-comments">ADD COMMENTS</Link></Menu.Item>

                    <Menu.Item key="2"><Link to="./users">USERS</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="./table">Table</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="./progress">Progress</Link></Menu.Item>

                    <Menu.Item key="5"><Button>Ant Button</Button></Menu.Item>
                    <Menu.Item key="6" className={styles['override-ant-btn']}><Button>Override Ant Button</Button></Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home </Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div id="container" style={{ background: '#fff', padding: 24, minHeight: height - 187 }}>
                    {allRoutesFn(routes)}
                </div>
            </Content>
            <Footer className={styles.boxStyle} style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    )
}

export default App;
