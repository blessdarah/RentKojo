import React, { useState } from "react";
import { Button, Layout, Typography } from "antd";
import "./styles.scss";
import { MenuFoldOutlined } from "@ant-design/icons";
import { SidebarNavigation } from "../components/welcome/navigation-menu.component";
import { NavigationMenu } from "../components/welcome/sidebar-nav.component";
import useToken from "antd/es/theme/useToken";

const { Header } = Layout;

const WelcomePage: React.FC = () => {
  const [show, setShow] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const token = useToken();
  console.log("token: ", token);

  const showDrawer = () => {
    setShow(true);
  };
  const onClose = () => {
    setShow(false);
  };

  function login() {
    setLoading(true);
  }

  return (
    <>
      <Layout className="layout">
        <SidebarNavigation onClose={onClose} visible={show} login={login} />
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            left: "0",
            top: "0",
            backgroundColor: "#fff",
          }}
          className={"page__header"}
        >
          <div className="logo">
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                // color: token
              }}
            >
              RentKojo
            </p>
          </div>

          <MenuFoldOutlined
            onClick={showDrawer}
            style={{ color: "#572321", fontSize: "18px" }}
            className="trigger toggle"
          />
          <div className="menu">
            <NavigationMenu />
          </div>
        </Header>

        <div
          style={{
            marginTop: "3rem",
          }}
        >
          <div
            className="hero"
            style={{
              textAlign: "center",
              padding: "6rem 0",
              background:
                "url('https://img.freepik.com/free-photo/gray-abstract-wireframe-technology-background_53876-101941.jpg?w=1800&t=st=1674555061~exp=1674555661~hmac=86d5240e3d05adefe10c7b37c251408c42695d52de4891ec92ef72609240bb67')",
            }}
          >
            <Typography.Title
              style={{
                fontSize: "4.5rem",
                fontWeight: "bold",
                maxWidth: "70%",
                margin: "0 auto",
              }}
            >
              Rent and Sell anything from your fellow kojo
            </Typography.Title>
            <Typography.Paragraph
              style={{ fontSize: "1.2rem", color: "gray", marginTop: "1rem" }}
            >
              Rent and make money from any of your possessions through our
              platform
            </Typography.Paragraph>

            <Button type="primary" size="large">
              Get started
            </Button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default WelcomePage;
