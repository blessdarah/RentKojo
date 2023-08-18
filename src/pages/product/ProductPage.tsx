import React from "react";
import AppShell from "../../components/app-shell/AppShell";
import { ProCard } from "@ant-design/pro-components";
import { Product } from "../../models/Product";
import { Button, Card, Space, Table } from "antd";
import { useProductColumns } from "../../components/product/product-columns";
import { useRecoilValue } from "recoil";
import { productListAtom } from "../../recoil/product-atom";
import { useModalContext } from "../../context-hooks/AppModelContext";
import { ProductForm } from "../../components/product/product-form";

export const ProductPage: React.FC = () => {
  const { setShow, setTitle, setContent } = useModalContext();
  const products = useRecoilValue(productListAtom);
  const { productTableColumns } = useProductColumns();

  const showModal = () => {
    setTitle("Create product");
    setContent(<ProductForm />);
    setShow(true);
  };

  return (
    <AppShell>
      <Space direction="vertical" style={{ width: "100%" }}>
        <ProCard
          size="small"
          title="Products"
          subTitle="Manage products"
          extra={<Button onClick={showModal}>Create product</Button>}
          headStyle={{ paddingBottom: ".6rem" }}
          bodyStyle={{ display: "none" }}
        ></ProCard>
        <Card size="small">
          <Table<Product>
            size="small"
            dataSource={products}
            columns={productTableColumns}
            rowKey="id"
            scroll={{ x: 500 }}
          />
        </Card>
      </Space>
    </AppShell>
  );
};
