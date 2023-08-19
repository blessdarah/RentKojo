import { App, Button, Image, Popconfirm, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { AiOutlineDelete, AiTwotoneEdit } from "react-icons/ai";
import { Store } from "../../models/Store";
import { useModalContext } from "../../context-hooks/AppModelContext";
import { StoreForm } from "./store-form";
import { StoreService } from "../../services/StoreService";
import { useRecoilState } from "recoil";
import { storeListAtom } from "../../recoil/store-atom";

export const useStoreColumns = () => {
  const { setShow, setTitle, setContent } = useModalContext();
  const [stores, setStores] = useRecoilState(storeListAtom);
  const { notification } = App.useApp();

  const handleEdit = (store: Store) => {
    console.log("edit: ", store);
    setTitle("Edit store");
    setContent(<StoreForm formMode="update" store={store} />);
    setShow(true);
  };

  const handleDelete = async (store: Store) => {
    const feedback = await StoreService.delete(store);
    if (feedback.success) {
      setStores(stores.filter((item) => item.id !== store.id));
      notification.success({
        message: "Store has been deleted successfully",
        placement: "topRight",
      });
    } else {
      notification.error({
        message: "Could not delete store",
        placement: "topRight",
      });
    }
  };

  const storeTableColumns: ColumnsType<Store> = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => (a.name > b.name ? 1 : -1),
    },
    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Image",
      dataIndex: "imageBannerUrl",
      render: (_, row) => (
        <Image
          src={row.imageBannerUrl}
          width={35}
          height={35}
          style={{ borderRadius: "8px" }}
        ></Image>
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
            // onConfirm={() => handleDelete(row)}
            title="Dangerous action"
            description="Are you sure you want to delete this record?"
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
    storeTableColumns,
  };
};
