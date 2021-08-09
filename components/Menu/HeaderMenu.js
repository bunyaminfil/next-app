import React from "react";
import Link from "next/link";
import { Menu, Avatar, Badge, Input, Space, Row, Col } from "antd";
import { NotificationOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const { Search } = Input;

const rightStyle = { position: "absolute", top: 0, right: 0 };
const notiStyle = { position: "absolute", top: 5, right: 80 };

const onSearch = (value) => console.log(value);

class HeaderMenu extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col span="20" style={{ top: 5 }}>
            <Search
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
              size="large"
              style={{ width: 200 }}
            />
          </Col>
          <Col span="4">
            <Menu mode="horizontal">
              <Menu.Item key="notification" style={notiStyle}>
                <a href="/notifications">
                  <Badge count={99}>
                    <NotificationOutlined style={{ width: "2.5em" }} />
                  </Badge>
                </a>
              </Menu.Item>
              <SubMenu
                style={rightStyle}
                key="User"
                icon={
                  <Avatar
                    size={40}
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                }
              >
                <Menu.Item key="profile">
                  <Link href="/profile">Profile</Link>
                </Menu.Item>
                <Menu.Item key="out">Sign Out</Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default HeaderMenu;
