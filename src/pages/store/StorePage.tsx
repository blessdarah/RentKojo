import { ProCard } from "@ant-design/pro-components";
import { Button, Card, Space, Table, TableProps } from "antd";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import AppShell from "../../components/app-shell/AppShell";
import { useStoreColumns } from "../../components/store/store-columns";
import { StoreForm } from "../../components/store/store-form";
import { useModalContext } from "../../context-hooks/AppModelContext";
import { Store } from "../../models/Store";
import { storeListAtom } from "../../recoil/store-atom";

export const StorePage: React.FC = () => {
  const { setShow, setTitle, setContent } = useModalContext();
  const stores = useRecoilValue(storeListAtom);
  const { storeTableColumns } = useStoreColumns();
  const [pagination, setPagination] = useState({
    current: 1, // Current page number
    pageSize: 10, // Number of items per page
    total: 0, // Total number of items
  });
  
  const showModal = () => {
    setTitle("Create store");
    setContent(<StoreForm />);
    setShow(true);
  };

  const onChange: TableProps<Store>['onChange'] = (pagination: any, filters, sorter, extra) => {
    setPagination({ ...pagination})
    console.log('params', pagination, filters, sorter, extra);
  };

  useEffect(() => {

  }, [])

  return (
    <AppShell>
      <Space direction="vertical" style={{ width: "100%" }}>
        <ProCard
          size="small"
          title="Stores"
          subTitle="Manage stores"
          extra={<Button onClick={showModal}>Create store</Button>}
          headStyle={{ paddingBottom: ".6rem" }}
          bodyStyle={{ display: "none" }}
        ></ProCard>
        <Card size="small">
          <Table<Store>
            size="small"
            dataSource={stores}
            columns={storeTableColumns}
            rowKey="id"
            scroll={{ x: 500 }}
            onChange={onChange}
            pagination={pagination}
          />
        </Card>
      </Space>
    </AppShell>
  );
};
