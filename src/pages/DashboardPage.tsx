import React from "react";
import AppShell from "../components/app-shell/AppShell";
import { TinyArea, Column } from "@ant-design/plots";
import { ProCard } from "@ant-design/pro-components";
import { Avatar, Col, List, Row } from "antd";
import { AiFillUpCircle } from "react-icons/ai";

export const DashboardPage: React.FC = () => {
  const recentClients = [
    {
      title: "Ant Design Title 1",
      clientName: "Bless Darah",
    },
    {
      title: "Ant Design Title 2",
      clientName: "James M..",
    },
    {
      title: "Ant Design Title 3",
      clientName: "Jane Doe",
    },
    {
      title: "Ant Design Title 4",
      clientName: "Sonia blane",
    },
  ];

  const productsData = [
    {
      type: "p1",
      sales: 38,
    },
    {
      type: "p2",
      sales: 52,
    },
    {
      type: "p3",
      sales: 61,
    },
    {
      type: "p4",
      sales: 145,
    },
    {
      type: "p5",
      sales: 48,
    },
    {
      type: "p6",
      sales: 38,
    },
  ];
  const productConfig = {
    data: productsData,
    xField: "type",
    yField: "sales",
    label: {
      position: "middle",
      // 'top', 'bottom', 'middle',
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Best products",
      },
      sales: {
        alias: "sales",
      },
    },
  };

  const data = [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513,
    546, 983, 340, 539, 243, 226, 192,
  ];
  const config = {
    height: 60,
    autoFit: true,
    data,
    smooth: true,
  };
  return (
    <AppShell>
      <h3>Dashboard</h3>
      <Row gutter={[16, 16]}>
        <Col md={8}>
          <ProCard title="Month to date">
            <h1 style={{ marginTop: "-10px" }}>
              <span>
                <AiFillUpCircle />
              </span>{" "}
              200,000 XAF
            </h1>
            <TinyArea {...config} />
          </ProCard>
        </Col>

        <Col md={8}>
          <ProCard title="Best perfoming products">
            <h1 style={{ marginTop: "-10px" }}>
              <span>
                <AiFillUpCircle />
              </span>{" "}
              200,000 XAF
            </h1>
            <Column {...productConfig} />
          </ProCard>
        </Col>

        <Col md={8}>
          <ProCard title="Recent clients">
            <List
              itemLayout="horizontal"
              dataSource={recentClients}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                      />
                    }
                    title={<a href="https://ant.design">{item.title}</a>}
                    description={item.clientName}
                  />
                </List.Item>
              )}
            />
          </ProCard>
        </Col>
      </Row>
    </AppShell>
  );
};
