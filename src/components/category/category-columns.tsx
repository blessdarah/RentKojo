import { Button, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { AiOutlineDelete, AiTwotoneEdit } from "react-icons/ai";
import { Category } from "../../models/Category";
import { useModalContext } from "../../context-hooks/AppModelContext";
import { CategoryForm } from "./category-form";

export const useCategoryColumns = () => {
  const { setShow, setTitle, setContent } = useModalContext();

  const handleEdit = (category: Category) => {
    console.log("edit: ", category);
    setTitle("Edit category");
    setContent(<CategoryForm formMode="update" category={category} />);
    setShow(true);
  };

  const handleDelete = (category: Category) => {
    console.log("category: ", category);
  };

  const categoryTableColumns: ColumnsType<Category> = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => (a.name > b.name ? 1 : -1),
    },
    {
      title: "Description",
      dataIndex: "description",
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
    categoryTableColumns,
  };
};
