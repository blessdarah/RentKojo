import React from "react";
import AppShell from "../../components/app-shell/AppShell";
import { ProCard } from "@ant-design/pro-components";
import { Category } from "../../models/Category";
import { Button, Card, Space, Table } from "antd";
import { useCategoryColumns } from "../../components/category/category-columns";
import { useRecoilValue } from "recoil";
import { categoryListAtom } from "../../recoil/category-atom";
import { useModalContext } from "../../context-hooks/AppModelContext";
import { CategoryForm } from "../../components/category/category-form";

export const CategoryPage: React.FC = () => {
  const { setShow, setTitle, setContent } = useModalContext();
  const categories = useRecoilValue(categoryListAtom);
  const { categoryTableColumns } = useCategoryColumns();

  const showModal = () => {
    setTitle("Create category");
    setContent(<CategoryForm />);
    setShow(true);
  };

  return (
    <AppShell>
      <Space direction="vertical" style={{ width: "100%" }}>
        <ProCard
          size="small"
          title="Categories"
          subTitle="Manage categories"
          extra={<Button onClick={showModal}>Create category</Button>}
          headStyle={{ paddingBottom: ".6rem" }}
          bodyStyle={{ display: "none" }}
        ></ProCard>
        <Card size="small">
          <Table<Category>
            size="small"
            dataSource={categories}
            columns={categoryTableColumns}
            rowKey="id"
            scroll={{ x: 500 }}
          />
        </Card>
      </Space>
    </AppShell>
  );
};
