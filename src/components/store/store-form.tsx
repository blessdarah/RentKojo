import { App, Button, Form, Input } from "antd";
import React from "react";
import { useRecoilState } from "recoil";
import { FormMode } from "../../constants/common.constants";
import { useModalContext } from "../../context-hooks/AppModelContext";
import { useFormInit } from "../../hooks/FormInitHook";
import { Store, emptyStore } from "../../models/Store";
import { storeListAtom } from "../../recoil/store-atom";
import { StoreService } from "../../services/StoreService";
import UploadImage from "../shared/upload-image";

type Props = {
  formMode?: FormMode;
  store?: Store;
};

export const StoreForm: React.FC<Props> = ({
  formMode = "create",
  store = emptyStore,
}) => {
  const { setShow } = useModalContext();
  const { initFormData } = useFormInit();
  const { message } = App.useApp();
  const [stores, setStores] = useRecoilState(storeListAtom);
  const [form] = Form.useForm();

  initFormData(form, formMode, store);

  const handleImageUpload = (url: string) => {
    // const imageBannerUrl = form.getFieldValue("imageBannerUrl");
    form.setFieldValue("imageBannerUrl", url)
  };

  const onFinish = async (values: Store) => {
    try {
      if (formMode === "create") {
        const obj: Store = {
          ...emptyStore,
          ...values,
        };
        const response = await StoreService.create(obj);
        setStores([...stores, response.data]);
        message.success(response.message);
      } else {
        const obj: Store = {
          ...store,
          ...values,
        };
        const response = await StoreService.update(obj);
        const others = stores.filter(
          (item: Store) => item.id !== response.data.id
        );
        setStores([...others, response.data]);
        message.success(response.message);
      }
      form.resetFields();
      setShow(false);
    } catch (err) {
      message.error("somthing went wrong");
    }
  };

  return (
    <Form<Store>
      onFinish={onFinish}
      name="store-form"
      form={form}
      layout="vertical"
      initialValues={store}
    >
      <Form.Item
        label="name"
        name="name"
        rules={[{ required: true, message: "Name is required" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Location"
        name="location"
        rules={[{ required: true, message: "Location is required" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="imageBannerUrl"
        label="Upload Image"
      >
        <UploadImage
          maxCount={1}
          folderName="stores"
          onUpload={handleImageUpload}
        />
      </Form.Item>
      <Button htmlType="submit" type="primary">
        Save
      </Button>
    </Form>
  );
};
