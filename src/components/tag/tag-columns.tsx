import { Button, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { AiOutlineDelete, AiTwotoneEdit } from "react-icons/ai";
import { Tag } from "../../models/Tag";
import { useModalContext } from "../../context-hooks/AppModelContext";
import { TagForm } from "./tag-form";

export const useTagColumns = () => {
  const { setShow, setTitle, setContent } = useModalContext();

  const handleEdit = (tag: Tag) => {
    console.log("edit: ", tag);
    setTitle("Edit tag");
    setContent(<TagForm formMode="update" tag={tag} />);
    setShow(true);
  };

  const handleDelete = (tag: Tag) => {
    console.log("tag: ", tag);
  };

  const tagTableColumns: ColumnsType<Tag> = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => (a.name > b.name ? 1 : -1),
    },
    {
      title: "Options",
      width: "10rem",
      render: (_, row) => (
        <Space>
          <Button
            onClick={() => handleEdit(row)}
            size="small"
            icon={<AiTwotoneEdit />}
            title="Edit"
          ></Button>
          <Button
            onClick={() => handleDelete(row)}
            size="small"
            danger
            icon={<AiOutlineDelete />}
            title="delete"
          ></Button>
        </Space>
      ),
    },
  ];

  return {
    tagTableColumns,
  };
};
