import React from "react";
import AppShell from "../../components/app-shell/AppShell";
import { ProCard } from "@ant-design/pro-components";
import { Tag } from "../../models/Tag";
import { Button, Card, Space, Table } from "antd";
import { useTagColumns } from "../../components/tag/tag-columns";
import { useRecoilValue } from "recoil";
import { tagListAtom } from "../../recoil/tag-atom";
import { useModalContext } from "../../context-hooks/AppModelContext";
import { TagForm } from "../../components/tag/tag-form";

export const TagPage: React.FC = () => {
  const { setShow, setTitle, setContent } = useModalContext();
  const tags = useRecoilValue(tagListAtom);
  const { tagTableColumns } = useTagColumns();

  const showModal = () => {
    setTitle("Create tag");
    setContent(<TagForm />);
    setShow(true);
  };

  return (
    <AppShell>
      <Space direction="vertical" style={{ width: "100%" }}>
        <ProCard
          size="small"
          title="Tags"
          subTitle="Manage tags"
          extra={<Button onClick={showModal}>Create tag</Button>}
          headStyle={{ paddingBottom: ".6rem" }}
          bodyStyle={{ display: "none" }}
        ></ProCard>
        <Card size="small">
          <Table<Tag>
            size="small"
            dataSource={tags}
            columns={tagTableColumns}
            rowKey="id"
            scroll={{ x: 500 }}
          />
        </Card>
      </Space>
    </AppShell>
  );
};
