import { App, Button, Popconfirm, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { AiOutlineDelete, AiTwotoneEdit } from "react-icons/ai";
import { Category } from "../../models/Category";
import { useModalContext } from "../../context-hooks/AppModelContext";
import { CategoryForm } from "./category-form";
import { CategoryService } from "../../services/CategoryService";
import { useRecoilState } from "recoil";
import { categoryListAtom } from "../../recoil/category-atom";

export const useCategoryColumns = () => {
  const { setShow, setTitle, setContent } = useModalContext();
  const [categories, setCategories] = useRecoilState(categoryListAtom);
  const { notification } = App.useApp();

  const handleEdit = (category: Category) => {
    console.log("edit: ", category);
    setTitle("Edit category");
    setContent(<CategoryForm formMode="update" category={category} />);
    setShow(true);
  };

  const handleDelete = async (category: Category) => {
    try {
      const feedback = await CategoryService.delete(category);
      if (feedback.success) {
        setCategories(categories.filter((item) => item.id !== category.id));
        notification.error({
          message: feedback.message,
          placement: "topRight",
        });
      } else {
        notification.error({
          message: feedback.message,
          placement: "topRight",
        });
      }
    } catch (err) {
      console.log("Err: ", err);
      notification.error({
        message: "Somehing went wrong",
        placement: "topRight",
      });
    }
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
          <Popconfirm
            title="Dangerous action!"
            description="Are you sure you want to delete this category?"
          >
            <Button
              onClick={() => handleDelete(row)}
              size="small"
              danger
              icon={<AiOutlineDelete />}
              title="delete"
            ></Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return {
    categoryTableColumns,
  };
};
