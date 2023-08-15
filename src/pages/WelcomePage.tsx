import React, { useState } from "react";
import { Button, Layout, Typography } from "antd";
import "./styles.scss";
import { MenuFoldOutlined } from "@ant-design/icons";
import { SidebarNavigation } from "../components/welcome/navigation-menu.component";
import { NavigationMenu } from "../components/welcome/sidebar-nav.component";

const { Header } = Layout;

const WelcomePage: React.FC = () => {
  const [show, setShow] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const showDrawer = () => {
    setShow(true);
  };
  const onClose = () => {
    setShow(false);
  };

  function login() {
    console.log("redirecting login...", isLoading);
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
          }}
          className={"page__header"}
        >
          <div className="logo">
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              INCLUSIVE EDUCATION
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
            <Typography.Title style={{ fontSize: "4.5rem" }}>
              Building the next big thing
            </Typography.Title>
            <Typography.Paragraph style={{ fontSize: "1.8rem", color: "gray" }}>
              We're constantly improving this template
            </Typography.Paragraph>

            <Button type="primary" size="large">
              Get started
            </Button>
            <div
              style={{
                width: "70%",
                height: "600px",
                margin: "0 auto",
                boxShadow: "3px 8px 17px #18181822",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative",
                marginTop: "2rem",
              }}
            >
              <img
                src="https://img.freepik.com/free-vector/dashboard-user-panel-template_52683-29382.jpg?w=1800&t=st=1674554169~exp=1674554769~hmac=295eedcef2dfd408b5faea0897cdc48d7f521f96b1d14dc6e01609e3b4a19577"
                alt="dashboard"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>

        <footer className="footer__landing">
          <div className="container">
            <p className="text-center text-white">
              {" "}
              &copy; 2023{" "}
              <abbr
                title="Cameroon Baptist Convention"
                className="text-decoration-none"
              >
                CBC
              </abbr>{" "}
              Health Service
            </p>
          </div>
        </footer>
      </Layout>
    </>
  );
};

export default WelcomePage;
