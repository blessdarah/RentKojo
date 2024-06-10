import { App, Button, Image, Popconfirm, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { AiOutlineDelete, AiTwotoneEdit } from "react-icons/ai";
import { Product } from "../../models/Product";
import { useModalContext } from "../../context-hooks/AppModelContext";
import { ProductForm } from "./product-form";
import dayjs from "dayjs";
import { useRecoilState } from "recoil";
import { productListAtom } from "../../recoil/product-atom";
import { ProductService } from "../../services/ProductService";
import { resourceUrl } from "../../constants/common.constants";

export const useProductColumns = () => {
  const { setShow, setTitle, setContent } = useModalContext();
  const [products, setProducts] = useRecoilState(productListAtom);
  const { notification } = App.useApp();

  const handleEdit = (product: Product) => {
    setTitle("Edit product");
    setContent(<ProductForm formMode="update" product={product} />);
    setShow(true);
  };

  const handleDelete = async (product: Product) => {
    try {
      const feedback = await ProductService.delete(product);
      if (feedback.success) {
        setProducts(products.filter((item) => item.id !== product.id));
        notification.success({
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

  const productTableColumns: ColumnsType<Product> = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => (a.name > b.name ? 1 : -1),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      sorter: (a, b) => (a.amount > b.amount ? 1 : -1),
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
      title: "Duration Of Rentage",
      dataIndex: "durationOfRentage",
    },
    {
      title: "Image",
      dataIndex: "imageBannerUrl",
      render: (_, row) => (
        <Image
          src={`${resourceUrl}/uploads/products/${row.images[0]}`}
          width={35}
          height={35}
          style={{ borderRadius: "8px" }}
        />
      ),
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
            description="Are you sure you want to delete this tag?"
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
    productTableColumns,
  };
};
