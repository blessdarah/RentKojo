import { Button, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { AiOutlineDelete, AiTwotoneEdit } from "react-icons/ai";
import { Product } from "../../models/Product";
import { useModalContext } from "../../context-hooks/AppModelContext";
import { ProductForm } from "./product-form";
import * as dayjs from "dayjs";

export const useProductColumns = () => {
  const { setShow, setTitle, setContent } = useModalContext();

  const handleEdit = (product: Product) => {
    console.log("edit: ", product);
    setTitle("Edit product");
    setContent(<ProductForm formMode="update" product={product} />);
    setShow(true);
  };

  const handleDelete = (product: Product) => {
    console.log("product: ", product);
  };

  const productTableColumns: ColumnsType<Product> = [
    {
      title: "Description",
      dataIndex: "description",
      sorter: (a, b) => (a.description > b.description ? 1 : -1),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      sorter: (a, b) => (a.amount > b.amount ? 1 : -1),
    },
    {
      title: "Long description",
      dataIndex: "longDescription",
      sorter: (a, b) => (a.description > b.description ? 1 : -1),
    },
    {
      title: "Condition",
      dataIndex: "condition",
    },
    {
      title: "Available on",
      dataIndex: "availableStartDate",
      render: (_, row) => dayjs(row.availabilityStartDate).format("DD/MM/YYYY"),
    },
    {
      title: "Available till",
      dataIndex: "availableEndDate",
      render: (_, row) => dayjs(row.availabilityEndDate).format("DD/MM/YYYY"),
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
    productTableColumns,
  };
};
